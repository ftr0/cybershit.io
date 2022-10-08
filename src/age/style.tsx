import styled from 'styled-components';

const Page = styled.div`
 width: 100%;
 text-align: center;
 color: black;
 font-size: 10px;
 padding-bottom:50px;
 letter-spacing: 2px;
`


const HeaderPage = styled.div`
    display: flow-root;
    color: white;
    background: #2c343f;
    border-bottom: 1px solid;
    text-align: center;
    padding: 10px;
    font-size: 14px;
    @media (max-width: 768px){
        letter-spacing: 16px;
        width: 100%;
        text-align: centerM
    }
`

const Container30 = styled.div`
float:left;
color: black;
margin-top:5px;
width:32.7%;
margin-right:0.5%;
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

export { Page, HeaderPage, Container30};
