// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import SearchForm from './components/searchForm';
import { SavedItemsList } from './components/savedItemsList';


const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
`;
  
const LeftColumn = styled.div`
  
`;

const Divider = styled.div`
  margin: 35px 50px;
  border: 1px solid #F3F1F4;
  height: 500px;
`;

const RightColumn = styled.div`
  
`;

function App() {
  return (
    <Wrapper>
      <LeftColumn>
        <SearchForm />
      </LeftColumn>
      <Divider />
      <RightColumn>
      <SavedItemsList />
      </RightColumn>
    </Wrapper>
  );
}

export default App;
