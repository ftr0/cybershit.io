import styled from 'styled-components';


const Table = styled.table`
font-size: 12px;
text-align: left;
  cellspacing="0" cellpadding="0"
  background-color: lightblue;
  border-radius: 5px;

  color: white;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    border-radius: 0px;
    margin-bottom:40px;
    border: none;
    font-size: 10px;
  }
`

const Column1 = styled.td`
width: 5%;
padding: 10px;
`

const Column2 = styled.td`
width: 15%;
padding: 10px;
`

const Column3 = styled.td`
width: 76%;
padding: 10px;
`


const Column4 = styled.td`
width: 4%;
padding: 10px;
`

const CommentLine = styled.div`
backgroundColor:#191421; 
margin:20px;
`


export {  Table, Column1, Column2, Column3, Column4,CommentLine};
