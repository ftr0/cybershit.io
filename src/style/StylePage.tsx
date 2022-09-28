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
margin-top:20px;
  overflow: hidden;
  background: #191421;
  border: 1px solid black;
  border-radius: 10px;
  text-align: left;
  margin-left: 20%;
  margin-right: 20%;
  padding: 50px;
  letter-spacing: 1px;
  line-height: 2;
  @media (max-width: 768px) {
    letter-spacing: 0px;
    font-size:6px;
    margin: 0px;
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
  width: 100%;
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
letter-spacing: 1px;
line-height: 2;
@media (max-width: 768px) {
  letter-spacing: 0px;
  font-size:3px;
  margin: 0px;
  padding-top:10px;
  color: blue;
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

const Box = styled.div`
  width: 100%;
  margin-bottom: 50px;
}
`


const Avatar = styled.img`
  margin:10px;
  cursor:pointer;
  width: 50px;
  height: 50px;
}
`

const TableLatest = styled.table`
width:90%;
background: #191421;
border: 1px solid black;
border-radius: 10px;
text-align: center;
margin-left: 5%;
margin-right: 5%;
letter-spacing: 1px;
line-height: 2;
@media (max-width: 768px) {
  letter-spacing: 0px;
  font-size:3px;
  margin: 0px;
  padding-top:10px;
  color: blue;
}
`
const TableTDLatest = styled.td`
width:30%;
@media (max-width: 768px) {
  letter-spacing: 0px;
  font-size:3px;
  margin: 0px;
  padding-top:10px;
  color: blue;
}
`


const Container = styled.div`
margin-top:20px;
width:60%;
background: #191421;
border: 1px solid black;
border-radius: 10px;
text-align: center;
margin-left: 20%;
margin-right: 20%;
letter-spacing: 1px;
line-height: 2;
@media (max-width: 768px) {
  letter-spacing: 0px;
  font-size:3px;
  margin: 0px;
  padding-top:10px;
  color: blue;
}
`


export { Page, HeaderPage, FooterPage, CodeArea, BadgeBox, ChartDiv, Logo,InputArea, Box,Avatar,TableLatest,TableTDLatest,Container};
