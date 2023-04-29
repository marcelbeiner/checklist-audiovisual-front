import styled from "styled-components"

export const TabelaStyle = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
    text-align: center;
    border: 5px solid #000000;
    border-collapse: collapse;
  }

  th{
    border: 5px solid #000000;
  }

  th, td {
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  }
  td{
    padding-top: 1rem;
  }

  thead {
    background-color: #C8C119;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;

  }
  tbody{
    background-color: #D4D29C;
  }

    tbody button{
    text-transform: uppercase;
    font-size: 16px;
    background-color: #C8C119;
    border: none;
    border-radius: 5px;
    margin-top: 0.5rem;
    cursor: pointer;
    padding: 5px 25px;
    transition: 0.5s;
    :hover{
      background-color: red;
    }
  }

  .red{
    background-color: red;
  }
  .trashcan {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 100%;
  }
`;
