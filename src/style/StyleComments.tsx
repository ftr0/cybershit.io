import styled from 'styled-components';


const Table = styled.table`
text-align: left;
  cellspacing="0" cellpadding="0"
  background: lightblue;
  border-radius: 5px;
  border: 1px solid lightblue;
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
  }
`

export {  Table};
