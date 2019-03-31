import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const primaryColor = '#71a1b0';
export const secondaryColor = '#c6464a';

export const Button = styled.button`
  font-size: 16px;
  padding: 0.5em 1em;
  background-color: transparent;
  color: #fff;
  border-radius: 3px;
  border: 1px solid #fff;
  :hover {
    background-color: ${primaryColor};
    cursor: pointer;
  }
`;

export const Anchor = styled(Link)`
  color: ${primaryColor};
`;
