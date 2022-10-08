import styled from 'styled-components';

const HeaderPage = styled.div`
    display: flow-root;
    color: white;
    background: #2c343f;
    border-bottom: 1px solid;
    text-align: center;
    padding: 10px;
    font-size: 14px;
    @media (max-width: 768px){
        letter-spacing: 16px;
        width: 100%;
        text-align: centerM
    }
`

const TitleTable = styled.h2`
 width: 100%;
 background-color: grey;
`

const TableAge = styled.div`
 width: 100%;
`

const TableTDRank = styled.div`
 width: 100%;
`

const TDRank = styled.td`
 width: 10%;
`
const TDAvatar = styled.td`
 width: 10%;
`

const TDName = styled.td`
 width: 30%;
 text-align:left;
`

const TDWinsCount = styled.td`
 width: 10%;
 background: lightblue;
`

const TDLoseCount = styled.td`
 width: 10%;
 background:papayawhip;
`

const TDGamesCount = styled.td`
 width: 10%;
 background:lightgrey;
`

const TDWinRate = styled.td`
 width: 20%;
 text-align:center;
`

export { TableAge, TDRank, TDAvatar, TDName, TDWinsCount, TDLoseCount, TDGamesCount, TDWinRate, TitleTable,HeaderPage };
