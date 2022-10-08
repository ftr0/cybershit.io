import AgeRankTable from "./components/AgeRankTable/AgeRankTable"
import { Page, Container30,HeaderPage } from "./style"

const PageAge = () => {
  return (
    <Page>
      <Container30>
        <HeaderPage>rank match 1on1</HeaderPage>
        <div>
          <AgeRankTable setting ='rm_1v1' header='on'/>
          <AgeRankTable setting ='rm_1v1?query=www.cybershit.io'/>
          <AgeRankTable setting ='rm_1v1?query=Viktorius86'/>
        </div>
      </Container30>

      <Container30>
        <HeaderPage>quick match 1on1</HeaderPage>
        <AgeRankTable setting ='qm_1v1' header='on' />
      </Container30>
      
      <Container30>
        <HeaderPage>quick match 2on2</HeaderPage>
        <AgeRankTable setting ='qm_2v2' header='on'/>
      </Container30>
    </Page>
  );
}

export default PageAge;
