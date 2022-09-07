import styled from 'styled-components';

const Page = styled.div`
 width: 100%;
 text-align: center;
 background-color: #4f2a4e;
 color: white;
 font-size: 20px;
 padding-bottom:50px;
 letter-spacing: 2px;
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
height: 50px;
@media (max-width: 768px) {
  font-size: 10px;
  letter-spacing: 16px;
  width: 100%;
  height: 100px;
  padding-top: 0px;
}
`

export { Page, Icon, Header};