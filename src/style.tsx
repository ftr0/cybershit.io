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

const FooterPage = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  width: 60%;
  padding-top: 100px;
`

const Avatar = styled.img`
  width:15px;
  height:15px;
`



const Link = styled.a`
text-decoration: none;
color: white;
float:left;
font-size: 15px;
cursor: pointer;
padding-right:20px;
margin:10px;
 &:hover{
  -webkit-transition: all .6s ease;
  opacity: 0.7;
}
@media (max-width: 768px) {
}
`


const LinkRight = styled.a`
float: right;
text-decoration: none;
color: white;

font-size: 15px;
cursor: pointer;
padding-right:20px;
margin:10px;
 &:hover{
  -webkit-transition: all .6s ease;
  opacity: 0.7;
}
@media (max-width: 768px) {
}

`


export { Page, HeaderPage, FooterPage,Link, Avatar,LinkRight};
