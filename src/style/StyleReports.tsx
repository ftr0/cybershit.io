import styled from 'styled-components';

const ReportContainer = styled.div`
 text-align: center;
 background-color: lightblue;
 color: black;
 font-size: 20px;
 padding:50px;
 margin-left: 30%;
 margin-right: 30%;
 margin-bottom: 50px;
 letter-spacing: 2px;
 
   @media (max-width: 768px) {
    width: 90%;
    margin: 0px;
    margin-bottom: 20px;
    border-radius: 0px;
    padding:5%;
  }
` 

const ReportHeader = styled.div`
    width: 100%;
    font-weight: bold;
    
` 

const ReportBody = styled.div`
 width: 100%;
 line-height: 1.5em;
` 

export { ReportContainer,ReportHeader,ReportBody};