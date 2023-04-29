import React from 'react'

function Checklist(props) {
  const { nome, valor, serial_number, observacao, onDelete } = props;

  return (
    <tr>
      <td>{nome}</td>
      <td>R${valor}</td>
      <td>{serial_number}</td>
      <td>{observacao}</td>
      <button onClick={onDelete}>deletar</button>
    </tr>
  );
}

export default Checklist
