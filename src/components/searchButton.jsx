import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  background-color: #331bc9;
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 20px;
  margin: 20px 0;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: #628bff;
  }
`;

export function SearchButton(props) {
  return <StyledButton onClick={props.click}>Search</StyledButton>;
}
