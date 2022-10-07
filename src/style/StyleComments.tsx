import styled from 'styled-components';


const Table = styled.table`
  font-size: 10px;
  text-align: left;

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
vertical-align: middle;
width: 5%;
padding: 5spx;

`

const Column2 = styled.td`
font-weight:bold;
vertical-align: middle;
width: 15%;
padding: 5px;

`

const Column3 = styled.td`
vertical-align: middle;
width: 76%;
padding: 5px;

`

const Column4 = styled.td`
vertical-align: middle;
width: 4%;
padding: 5px;

`

const CommentLine = styled.div`
backgroundColor:#191421; 
margin:20px;
`


export {  Table, Column1, Column2, Column3, Column4,CommentLine};
