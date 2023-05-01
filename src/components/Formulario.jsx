import React, { useState } from 'react';
import api from '../api';
import {FormularioStyle} from './Formulario.style'

function Formulario({ onSubmit }) {

  /* usestates para criar checklist */
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  const [serialNumber, setSerialNumber] = useState('')
  const [observacao, setObservacao] = useState('')

  /* função para criar checklist */
  const handleSubmit = (event) => {
    event.preventDefault()

     /* Verifica se todos os campos foram preenchidos */
    if (!nome || !valor || !serialNumber) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    /* Verifica se o valor é um número válido */
    if (isNaN(valor) || valor <= 0) {
      alert('Por favor, insira um número válido.')
      return
    }

  const data = new FormData()
  data.append('nome', nome)
  data.append('valor', valor)
  data.append('serial_number', serialNumber)
  data.append('observacao', observacao)

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }

    api.post('/checklist', data, config)
      .then((response) => {
        console.log(response)
        onSubmit();
      })
      .catch((error) => {
        console.error(error)
      });

    setNome('')
    setValor('')
    setSerialNumber('')
    setObservacao('')
  };

  return (
    <FormularioStyle>
      <h2>Insira abaixo os equipamentos para orçar o seguro:</h2>
      <form onSubmit={handleSubmit} className='submit'>
        <div className="first-col">
          <div id='equipamento'>
            <label htmlFor="nome">Equipamento:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>
          <div id='valor'>
            <label htmlFor="valor">Valor:</label>
            <input
              type="text"
              id="valor"
              name="valor"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
            />
          </div>
        </div>
        <div className="second-col">
          <div id='serial'>
            <label htmlFor="serialNumber">Número de Série:</label>
            <input
              type="text"
              id="serialNumber"
              name="serial_number"
              value={serialNumber}
              onChange={(event) => setSerialNumber(event.target.value)}
            />
          </div>
          <div id='observacao'>
            <label htmlFor="observacao">Observação:</label>
            <input
              id="observacao"
              name="observacao"
              value={observacao}
              onChange={(event) => setObservacao(event.target.value)}
            ></input>
          </div>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </FormularioStyle>
  );
}

export default Formulario;
