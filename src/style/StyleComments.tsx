import styled from 'styled-components';


const CommentHeader = styled.div`
  background: #283b59;
  border: none;
  color: white;
  padding: 20px;

`
const CommentBody = styled.div`
padding: 20px;
background: #283b59;
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


const Table = styled.table`
  font-size: 20px;
  background: lightblue;
  border-radius: 5px;
  border: 1px solid white;
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



export {  Table,   CommentBox,       CommentHeader, CommentBody };
