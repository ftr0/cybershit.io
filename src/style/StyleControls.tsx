import styled from 'styled-components';

const Link = styled.span`
font-size: 30px;
cursor: pointer;
letter-spacing: 7px;
 margin:10px;
 color: white;
 text-decoration: none;
 &:hover{
  -webkit-transition: all .6s ease;
  opacity: 0.7;
  
}
@media (max-width: 768px) {
  font-size: 40px;
 
  text-align: center;
}
`
const Button = styled.button`
cursor: pointer;

background: #191421;
color: white;
  border-radius: 10px;
  border: 1px solid darkblue;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 80%;
    margin: 0px;
  
    margin-bottom:40px;
    margin-top:40px;
  }
  &:hover{
    color: palevioletred;
  }
`

const Input = styled.input`
  background: #191421;
  color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  font-size: 20px;
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

const Select = styled.select`
width: 200px;
background: #191421;
color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  text-align: center;
  font-size: 15px;
  letter-spacing: 2px;
  border: 1px solid black;
`

const BadgeBox = styled.div`
  padding: 5px;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  font-size: 10px;s
  width: 70%;
`

const Badge = styled.div`
  float: left;
  background: #202733;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  text-align: center;
  font-size: 10px;
  width: 100px;
`

const Option = styled.option`
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
`

const TextBox = styled.textarea`
background: #191421;
color: white;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
  font-size: 20px;
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
font-size: 20px;
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

const MenuButton = styled.button`
  background: lightblue;
  border-radius: 20px;
  border: none;
  color: black;
  padding: 20px;
  margin: 30px;

`

export { Button, Input, TextBox, Error, MenuButton, Option, Select, Link,Badge, BadgeBox };
