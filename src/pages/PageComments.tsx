import IconDefinitionTable from '../components/IconDefinitionTable';
import ListComments from "../components/ListComments"
import PostComment from '../components/PostComment';
import { Wrapper, Header } from "../style/style"

function App() {

  return (
    <Wrapper>
      <PostComment />  
      <IconDefinitionTable/>
      <ListComments />   
    </Wrapper>
  );
}

export default App;
