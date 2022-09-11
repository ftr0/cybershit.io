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
 width: 100%;
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
background: #191421;
border: 1px solid black;
border-radius: 10px;
text-align: left;
margin-left: 15%;
margin-right: 15%;
padding: 50px;
letter-spacing: 1px;
line-height: 2;
`

const BadgeBox = styled.div`
  padding: 5px;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  font-size: 10px;s
  width: 70%;
`

export { Page, HeaderPage, FooterPage, CodeArea, BadgeBox};