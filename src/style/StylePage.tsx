import styled from 'styled-components';

const Page = styled.div`
 width: 100%;
 text-align: center;
 color: black;
 font-size: 10px;
 padding-bottom:50px;
 letter-spacing: 2px;
`

const Wrapper = styled.div`

`

const FooterPage = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  width: 60%;
  padding-top: 100px;
`

const HeaderPage = styled.div`
height: 20px;
  color: black;
  background: white;
  border-bottom: 1px solid;
  text-align: left;
  padding-left:20px;

  padding-bottom: 15px;
  @media (max-width: 768px) {
  letter-spacing: 16px;
  width: 100%;
  text-align: centerM
}
`

const CodeArea = styled.div`
  margin-top:20px;
  overflow: hidden;
  background: #e9ecee;
  border: 1px solid black;
  text-align: left;
  margin-right: 2%;
  padding: 50px;
  letter-spacing: 1px;
  line-height: 2;
  color: black;
  @media (max-width: 768px) {
    letter-spacing: 0px;
    font-size:6px;
    margin: 0px;
}
`

const BadgeBox = styled.div`
color: black;
  padding: 5px;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
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

vertical-align: middle;
margin-top:25px;
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
  
  cursor:pointer;
  width: 30px;
  height: 30px;
}
`

const TableLatest = styled.table`
width:100%;

text-align: center;
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

const CodeMenu = styled.div`
float:left;
color: black;

width:30%;
margin-left:2%;
margin-right:2%;
padding-bottom: 25px;
border: 1px solid black;

text-align: center;
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

const CodeOptions = styled.div`

@media (max-width: 768px) {
 
}
`


const Container = styled.div`
float:left;
color: black;
margin-top:20px;
width:47%;
margin:1%;
padding-bottom: 25px;
border: 1px solid black;

text-align: center;
letter-spacing: 1px;
line-height: 2;
@media (max-width: 768px) {
  letter-spacing: 0px;
  font-size:3px;
  margin: 0px;
  padding-top:10px;
  color: blue;
  width:100%;
}
`

const Container30 = styled.div`
float:left;
color: black;
margin-top:20px;
width:32%;
margin:5px;
padding-bottom: 25px;
border: 1px solid black;
text-align: center;
letter-spacing: 1px;
line-height: 2;
@media (max-width: 768px) {
  letter-spacing: 0px;
  font-size:3px;
  margin: 0px;
  padding-top:10px;
  color: blue;
  width:100%;
}
`


export { Page, HeaderPage, FooterPage, CodeArea, BadgeBox, ChartDiv, Logo,InputArea, Box,Avatar,TableLatest,TableTDLatest,Container,CodeOptions,CodeMenu,Container30,Wrapper};
