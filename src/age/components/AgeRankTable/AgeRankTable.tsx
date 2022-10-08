import React, { useState, useEffect } from 'react';
import {Player} from "./types/Player"
import {Settings} from "./types/Setings"
import ChartAgeRate from '../ChartAgeRate/ChartAgeRate';
import TableHeader from './TableHeader';
import {TableAge, TDRank, TDName, TDAvatar, TDWinsCount, TDLoseCount, TDGamesCount, TDWinRate} from "./AgeRankTableStyle"
export const AgeRankTable = (props: Settings) =>
{
  const [playerList, setPlayerList] = useState<Player>()

  useEffect(() => {
    fetch('https://aoe4world.com/api/v0/leaderboards/'+props.setting)
    .then(response => response.json())
    .then(res => setPlayerList(res))
  }, [])

  return (
      <TableAge>
         { props.header === 'on' && <TableHeader /> }
        {playerList?.players.map(item => (
          <tr>
            <TDRank>{item.rank}</TDRank>
            <TDAvatar><img src={item.avatars.full} width="20px" height="20px;"/></TDAvatar>
            <TDName>{item.name}</TDName>
            <TDRank>{item.rank_level}</TDRank>
            <TDWinsCount>{item.wins_count}</TDWinsCount>
            <TDLoseCount>{item.losses_count}</TDLoseCount>
            <TDGamesCount>{item.games_count}</TDGamesCount>
            <TDWinRate>
              <ChartAgeRate setting={item.win_rate}/> 
              {item.win_rate}%
            </TDWinRate>
          </tr>
          ))}
      </TableAge>
  );
}

export default AgeRankTable;
 
    