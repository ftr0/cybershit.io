import styled from 'styled-components';

const Link = styled.div`
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
animation: fadeIn 2s;
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`
const Button = styled.button`
cursor: pointer;
background: #e9ecee;
color:black;
font-size:10px;
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

padding: 2px;
margin: 2px;
  text-align: center;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom:40px;
    margin-top:0px;
  
  }
`

const Input = styled.input`
padding: 2px;
margin: 2px;
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
  width: 100%;
  padding: 2px;
  margin: 2px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 80%;
    margin-left: 0px;
    margin-right: 0px;
    border: none;
    margin-bottom:40px;
    margin-top:20px;
    padding: 5%;
    color: blue;
  }
`



const Select = styled.select`
  color:black;
  background: #e9ecee;
  font-size:10px;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  text-align: center;
  width: 100px;
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

const Badge = styled.button`

  color:black;
  background: #e9ecee;
  font-size:10px;
  border: 1px solid black;
  padding: 3px;
  margin: 3px;
  text-align: center;
  width: 100px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    margin-bottom:0px;
    margin-top:0px;
  }
  &:hover{
      color: palevioletred;
  }
`
const BadgeStared = styled.button`
  font-size:10px;
  color:black;
  background: #e9ecee;
  border: 1px solid black;
  padding: 3px;
  margin: 3px;
  text-align: center;
  width: 100px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    margin-bottom:0px;
    margin-top:0px;
  }
  &:hover{
      color: palevioletred;
  }
`

const Option = styled.option`
  color:black;
  background: #a3a4a6;
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


export { Button, Input, TextBox, Error, Option, Select, Link,Badge,InputChat,ButtonSend , BadgeStared};
