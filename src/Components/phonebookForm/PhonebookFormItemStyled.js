import styled from "styled-components";

export const PhonebookItemStyled = styled.form`
  width: 250px;
  border: 1px solid blue;
  .phonebook-name {
    margin-left: 10px;
    font-size: 22px;
    font-weight: bold;
  }
  .phonebook-number {
    margin-left: 10px;
    font-size: 22px;
    font-weight: bold;
  }

  .input {
    width: 150px;
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid blue;
    :hover {
      border-color: red;
    }
    :focus {
      border-color: red;
      border: 3px solid red;
    }
  }

  .add-contact-btn {
    display: block;
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 18px;
    color: blue;
    border-color: blue;
    background-color: yellow;
    :hover {
      color: red;
      border-color: red;
    }
    :focus {
      border-color: yellow;
      border: 3px solid yellow;
    }
  }
`;
