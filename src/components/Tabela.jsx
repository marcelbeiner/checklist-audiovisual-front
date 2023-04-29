import { useState, useEffect } from 'react'
import trash from '../assets/lixeira.png'
import Checklist from './Checklist'
import { TabelaStyle } from './Tabela.style'
import api from '../api'
import Formulario from './Formulario'

const Tabela = () => {
  const [checklists, setChecklists] = useState([]);

  /* Função para pegar todos os checklists */
  const fetchChecklists = async () => {
    try {
      const response = await api.get('/checklists')
      console.log("Response data:", response.data)
      setChecklists(response.data.checklists)
      console.log("Checklists state:", checklists)
    } catch (error) {
      console.error(error);
    }
  };

  /* UseEffect para chamar a função que carrega os checklists e monitorar*/
  useEffect(() => {
    fetchChecklists();
  }, []);


  const deleteChecklist = (id) => {
    const response = api.delete(`checklist?checklist_id=${id}`)
    setChecklists(checklists.filter((checklist) => checklist.id !== id))
    return response.data;
  };

  return (
    <TabelaStyle>
      <Formulario onSubmit={fetchChecklists} />
      <table>
        <thead>
          <tr>
            <th><span>equipamento:</span></th>
            <th><span>valor:</span></th>
            <th><span>número de série</span></th>
            <th><span>observação:</span></th>
            <th className='red'><span className='trashcan'><img src={trash} alt='ícone de lixeira' /></span></th>
          </tr>
        </thead>
        <tbody>
          { checklists.map((checklist) => (
            <Checklist
              key={checklist.id}
              nome={checklist.nome}
              valor={checklist.valor}
              serial_number={checklist.serial_number}
              observacao={checklist.observacao}
              onDelete={() => deleteChecklist(checklist.id)}
            />
          ))}
        </tbody>
      </table>
    </TabelaStyle>
  );
};

export default Tabela;
