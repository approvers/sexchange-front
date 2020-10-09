import * as React from 'react';
import styled from 'styled-components';

const HeaderRoot = styled.div`
  
  background-color: #ffc6ea;
  
  padding: 0.7em 0.3em;

  font-size: 3em;
  font-weight: bold;
  
  text-align: center; 
  
`

export function Header() {
    return (
        <HeaderRoot>
            Sexchange
        </HeaderRoot>
    )
}