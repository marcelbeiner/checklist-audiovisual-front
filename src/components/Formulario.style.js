import styled from "styled-components"

export const FormularioStyle = styled.div`
border: 6px solid black;
margin-bottom: 88px;
h2{
  text-align: center;
  border-bottom: 6px solid black;
  background-color: white;
}
form{
  background-color: #C8C119;
  width: 100%;
  display: flex;
  justify-content: space-between;

  label{
    padding-left: 5px;
  }

  input{
    padding-left: .5rem;
    background-color: transparent;
    border: none;
    width: 419px;
    height: 50px;
    :focus {
      outline: none;
    }
  }
  input{
    background-color: transparent;
    width: 420px;
    height: 50px;
    resize: none;
    :focus {
      outline: none;
    }

  }

  button{
    background-color: #3CBB0F;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 25px;
    line-height: 34px;
    text-align: center;
    padding: 0 27px;
    :active {
      background-color: #22690A;
      color: #000; /* altera a cor do texto quando o botão é clicado */
    }
  }
  #valor{
    border-top: 6px solid black;

    input{
      border: none;
    }
  }
  #serial{
    border-left: 6px solid black;
    border-right: 6px solid black;
    input{
      border: none;
    }
  }
  #observacao{
  border-top: 6px solid black;
  border-left: 6px solid black;
  border-right: 6px solid black;
  display: flex;

  align-items: center;
  justify-content: center;

  input{
    border: none;
    padding-left: .5rem;
  }

  label{
    padding-bottom: 2px;
    margin-top: 10px;
  }
}
}

`
