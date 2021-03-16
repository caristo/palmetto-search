// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import SearchForm from './components/searchForm';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <SearchForm />
    </Wrapper>
  );
}

export default App;
