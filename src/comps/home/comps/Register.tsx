import * as React from 'react';
import styled from 'styled-components';

const RegisterRoot = styled.div`
  
  display: flex;
  justify-content: center; 
  align-items: center;
  
  background-color: #ffd0ee;
  height: 5em;
  text-align: center;
`;

const RegisterButton = styled.span`
  box-sizing: border-box;
  padding: 1em;
  height: 3.5em;
  background-color: #ff94db;
  border-radius: 15px;
  
  transition: all 0.25s;
  
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  
`

export class Register extends React.Component {
    render() {
        return (
            <RegisterRoot>
                <RegisterButton>性癖を登録する</RegisterButton>
            </RegisterRoot>
        )
    }
}