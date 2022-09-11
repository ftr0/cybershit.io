import styled from 'styled-components';

const Page = styled.div`
 width: 100%;
 text-align: center;
 color: white;
 font-size: 12px;
 padding-bottom:50px;
 letter-spacing: 2px;
`

const FooterPage = styled.div`
  margin-left: 20%;
  margin-right: 20%;
 
  width: 60%;
  padding-top: 100px;
`

const HeaderPage = styled.div`
  background: #361735;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
  letter-spacing: 16px;
  width: 100%;
  text-align: centerM
}
`

const CodeArea = styled.div`
overflow: hidden;
  background: #191421;
  border: 1px solid black;
  border-radius: 10px;
  text-align: left;
  margin-left: 15%;
  margin-right: 15%;
  padding: 50px;
  letter-spacing: 1px;
  line-height: 2;
  @media (max-width: 768px) {
    letter-spacing: 0px;
    font-size:3px;
}
`

const BadgeBox = styled.div`
  padding: 5px;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  font-size: 10px;s
  width: 70%;
`

const ChartDiv = styled.div`
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  @media (max-width: 768px) {
  width: 100%;
  margin:0px;
}
`


const InputArea = styled.div`
background: #191421;
border: 1px solid black;
border-radius: 10px;
text-align: center;
margin-left: 20%;
margin-right: 20%;
padding: 50px;
letter-spacing: 1px;
line-height: 2;
@media (max-width: 768px) {
  letter-spacing: 0px;
  font-size:3px;
}
`

const Logo = styled.img`
  width: 20%;
  margin-left: 40%;
  margin-right: 40%;
  @media (max-width: 768px) {
  width: 50%;
  margin:0px;
}
`

export { Page, HeaderPage, FooterPage, CodeArea, BadgeBox, ChartDiv, Logo,InputArea};