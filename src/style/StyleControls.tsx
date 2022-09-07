import styled from 'styled-components';

const Link = styled.a`
letter-spacing: 7px;
 padding:10px;
 margin:10px;
 background-color: #471c46;
 color: white;
 text-decoration: none;
 &:hover{
  color: palevioletred;
  background-color: yellow;
}
@media (max-width: 768px) {
  width: 39%;
  float: left;

}
`
const Button = styled.button`
  background: #964d95;
  border-radius: 20px;
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
  padding: 20px;
  margin: 20px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0px;
    border-radius: 0px;
    border: none;
    margin-bottom:40px;
    margin-top:20px;
    padding: 5%;
  }
`

const Select = styled.select`
  background: lightblue;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
`

const Option = styled.option`
  background: lightblue;
  border-radius: 20px;
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
  padding: 20px;
  font-size: 20px;
  letter-spacing: 1px;
  height: 150px;
  resize: none;
  width: 50%;
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0px;
    border-radius: 0px;
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
  margin-left: 40%;
  width: 20%;
`

const MenuButton = styled.button`
  background: lightblue;
  border-radius: 20px;
  border: none;
  color: black;
  padding: 20px;
  margin: 30px;
  
`

export { Button, Input, TextBox, Error, MenuButton, Option, Select, Link };