import Chart from './components/Chart';
import { Page, ChartDiv,ContainerLeft, ContainerRight, HeaderPage} from "./style/StylePage";
import PageComments from "./components/ListComments"
import FormComments from "./components/FormComment"
import LastUpdates from "./components/LastUpdates"

const App = () => {
  return (
    <Page>
      <ContainerLeft>
        <HeaderPage>what you can find here?¿?¿?</HeaderPage>
        <ChartDiv><Chart/></ChartDiv>
        <HeaderPage>last updates</HeaderPage>
        <LastUpdates/>
      </ContainerLeft>
      <ContainerRight>
        <HeaderPage>blaBla blabla</HeaderPage>
        <FormComments />
        <PageComments/>
      </ContainerRight>
    </Page>
  )
}

export default App;
