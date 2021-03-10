import styled from 'styled-components';

const Input = styled.input`
  width: calc(100% - 34px);
  color: #a8a8a8;
  border: 2px solid #e9e7ea;
  border-radius: 6px;
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  font-style: italic;
  margin: 20px 0;
`;

export function KeywordInput() {
  return <Input defaultValue="Keyword..." type="text" />;
}
