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

const Wrapper = styled.div`
 width: 100%;
 @media (max-width: 768px) {
  margin: 0px;
}
`

const FormWrapper = styled.div`
 width: 100%
 text-align: center;
 background-color: #471c46;
`


const Link = styled.a`
 padding:10px;
 margin:10px;
 background-color: #471c46;
 color: white;
 text-decoration: none;
 &:hover{
  color: palevioletred;
  background-color: yellow;
}
`


const Button = styled.button`
  background: #964d95;
  border-radius: 20px;
  border: none;
  color: black;
  padding: 20px;
  margin: 30px;
  font-size: 20px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    border-radius: 0px;
    margin-bottom:40px;
    margin-top:40px;
  }
  &:hover{
    color: palevioletred;
  }

`

const Input = styled.input`
  
  background: lightblue;
  border-radius: 20px;
  border: none;
  color: black;
  padding: 20px;
  margin: 20px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    border-radius: 0px;
    margin-bottom:40px;
    margin-top:20px;
  }
`



const Select = styled.select`
  background: lightblue;
  border-radius: 20px;
  border: none;
  color: black;
  padding: 20px;
  margin: 20px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
`

const Option = styled.option`
  background: lightblue;
  border-radius: 20px;
  border: none;
  color: black;
  padding: 20px;
  margin: 20px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
`

const TextBox = styled.textarea`
  background: lightblue;
  border-radius: 20px;
  text-align: center;
  border: none;
  color: black;
  padding: 20px;
  font-size: 20px;
  letter-spacing: 1px;
  height: 150px;
  resize: none;
  width: 50%;
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    border-radius: 0px;
  }
`

const CommentHeader = styled.div`
  background: #283b59;
  border: none;
  color: white;
  padding: 20px;
  
  
`

const CommentBox = styled.div`
  font-size: 20px;
  background: lightblue;
  border-radius: 5px;
  border: 2px solid white;
  color: black;
 
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    border-radius: 0px;
    margin-bottom:40px;
    border: none;
  }
`
const Error = styled.div`
font-size: 20px;
  background: red;
  border-radius: 20px;
  border: none;
  color: black;
  padding: 20px;
  margin-left: 40%;
  width: 20%;
`



const Icon = styled.span`
  padding: 10px;
  margin: 10px;
  font-size: 20px;
`

const MenuButton = styled.button`
  background: lightblue;
  border-radius: 20px;
  border: none;
  color: black;
  padding: 20px;
  margin: 30px;
  
`

const Header = styled.div`
background: #361735;
text-align: center;
font-size: 20px;
color: white;
letter-spacing: 25px;
padding: 50px;
@media (max-width: 768px) {
  font-size: 10px;
  letter-spacing: 16px;
}

`

export { Page, Button, Wrapper, FormWrapper, Input, TextBox, CommentBox, Error, Icon, MenuButton, Header, Option, Select, CommentHeader, Link };