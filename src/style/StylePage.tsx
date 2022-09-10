import styled from 'styled-components';

const Page = styled.div`
 width: 100%;
 text-align: center;
 //background-color: #4f2a4e;
 color: white;
 font-size: 20px;
 padding-bottom:50px;
 letter-spacing: 2px;
`


const FooterPage = styled.div`
 width: 100%;
padding-top: 100px;
`


const Icon = styled.span`
  padding: 10px;
  margin: 10px;
  font-size: 20px;
`

const Header = styled.div`
background: #361735;
text-align: center;
font-size: 20px;
color: white;
letter-spacing: 25px;
padding-top: 20px;
height: 60px;
@media (max-width: 768px) {
  font-size: 10px;
  letter-spacing: 16px;
  width: 100%;

  text-align: centerM
}
`
const Quest = styled.span`
text-align: center;
font-size: 30px;
color: white;
letter-spacing: 50px;
line-height: 3;
`

const CodeArea = styled.div`
background: #191421;
color: white;
border: 1px solid black;
border-radius: 10px;
text-align: left;
font-size: 14px;
margin-left: 15%;
margin-right: 15%;
padding: 50px;
letter-spacing: 0px;
line-height: 2;
color: white;
`

export { Page, Icon, Header, Quest, FooterPage, CodeArea};