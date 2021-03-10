import styled from 'styled-components';

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  width: calc(100% - 34px);
  color: #A8A8A8;
  border: 2px solid #E9E7EA;
  border-radius: 6px;
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  font-style: italic;
  margin: 20px 0;
`;

export function KeywordInput () {
  // Use it like any other component.
  return (
    <>
      <Input defaultValue="Keyword..." type="text" />
    </>

  );
};
