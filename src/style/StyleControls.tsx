import styled from 'styled-components';

const Link = styled.span`
font-size: 30px;
cursor: pointer;
margin:10px;
 &:hover{
  -webkit-transition: all .6s ease;
  opacity: 0.7;
}
@media (max-width: 768px) {
}
`
const Button = styled.button`
cursor: pointer;
background: #202733;
color:grey;
border-radius: 5px;
border: 1px solid darkblue;
padding: 5px;
margin: 5px;
letter-spacing: 1px;
@media (max-width: 768px) {
  width: 80%;
  margin: 0px;
  margin-bottom:40px;
  margin-top:0px;
}
&:hover{
    color: palevioletred;
}
`

const ButtonSend = styled.button`
border: 1px solid black;
  background: #191421;
  color: white;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom:40px;
    margin-top:0px;
  
  }
`

const Input = styled.input`
border: 1px solid black;
color:grey;
background: #202733;
border-radius: 5px;
border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 80%;
    margin: 0px;
    border: none;
    margin-bottom:40px;
    margin-top:20px;
    padding: 5%;
  }
`



const InputChat = styled.input`
width: 50%;
color:grey;
background: #202733;
border-radius: 10px;
border: 1px solid black;

  padding: 10px;
  margin: 10px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    border: none;
    margin-bottom:40px;
    margin-top:20px;
    padding: 5%;
  }
`



const Select = styled.select`
  color:grey;
  background: #202733;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  text-align: center;
  width: 100px;
`

const Badge = styled.button`
  float: left;
  color:grey;
  background: #202733;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  text-align: center;
  width: 120px;
`

const Option = styled.option`
  color:grey;
  background: #202733;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  text-align: center;
  width: 100px;
`

const TextBox = styled.textarea`
  background: #191421;
  color: white;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
  letter-spacing: 1px;
  height: 150px;
  resize: none;
  width: 50%;
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 768px) {
  width: 80%;
  margin: 0px;
  border: none;
  padding: 5%;
  }
`
const Error = styled.div`
  background: red;
  border-radius: 20px;
  border: none;
  color: black;
  padding: 20px;
  margin-top: 60px;
  margin-left: 25%;
  margin-left: 25%;
  width: 50%;
`


export { Button, Input, TextBox, Error, Option, Select, Link,Badge,InputChat,ButtonSend };
