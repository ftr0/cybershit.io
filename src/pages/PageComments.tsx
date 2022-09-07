import IconDefinitionTable from '../components/IconDefinitionTable';
import ListComments from "../components/ListComments"
import PostComment from '../components/PostComment';

function App() {

  return (
    <div>
      <PostComment />  
      <IconDefinitionTable/>
      <ListComments />   
    </div>
  );
}

export default App;
