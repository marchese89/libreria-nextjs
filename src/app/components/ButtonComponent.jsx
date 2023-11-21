import styled from "styled-components";

const StyledButton = styled.button`
  margin: 1em;
  padding: 0.5em 1em;
  border: 0;
  background-color: aquamarine;
  color: white;
  font-size: 1em;
  border-radius: 5px;
  box-shadow: inset;
  cursor: pointer;
`;

export default function ButtonComponent({ nome_button }) {
  return <StyledButton>{nome_button}</StyledButton>;
}
