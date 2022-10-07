import AgeRankTable from "../age/AgeRankTable"
import { Container,Container30 } from "../style/StylePage"

const PageAge = () => {
  return (
    <div>
       <div style={{width:"100%"}}>
       <a href="https://talky.io/age4" target="_blank"> <img src="https://cybershit.io/icons/age4.jpg" width="400px"/></a>
       </div>
       
      <Container30>
        <h2>rank match 1on1</h2>
        <AgeRankTable setting ='rm_1v1' header='on'/>
        <AgeRankTable setting ='rm_1v1?query=www.cybershit.io'/>
        <AgeRankTable setting ='rm_1v1?query=Viktorius86'/>
      </Container30>
      <Container30>
        <h2>quick match 1on1</h2>
        <AgeRankTable setting ='qm_1v1' header='on' />
      </Container30>
      <Container30>
        <h2>quick match 2on2</h2>
        <AgeRankTable setting ='qm_2v2' header='on'/>
      </Container30>
    </div>
  );
}

export default PageAge;
