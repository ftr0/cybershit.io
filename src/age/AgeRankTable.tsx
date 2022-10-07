import React, { useState, useEffect } from 'react';
import {Player} from "../types/Player"
import {Settings} from "../types/Setings"
import ChartAgeRate from './ChartAgeRate';
import TableHeader from './TableHeader';

export const ListReports = (props: Settings) =>
{
  const [playerList, setPlayerList] = useState<Player>()

  useEffect(() => {
    fetch('https://aoe4world.com/api/v0/leaderboards/'+props.setting)
    .then(response => response.json())
    .then(res => setPlayerList(res))
    .catch(err => console.log(err))
      console.log(playerList);
  }, [])

  return (
  
      <table style={{width:"100%"}}>
         { props.header === 'on' && <TableHeader /> }
        <tbody>
        {playerList?.players.map(item => (
          <tr>
            <td style={{width:"7%"}}>{item.rank}</td>
            <td style={{width:"5%"}}><img src={item.avatars.full} width="20px" height="20px;"/></td>
            <td style={{width:"40%", textAlign:"left"}}>{item.name}</td>
            <td style={{width:"5%", background:"lightblue"}}>{item.wins_count}</td>
            <td style={{width:"5%", background:"papayawhip"}}>{item.losses_count}</td>
            <td style={{width:"10%", background:"lightgrey"}}>{item.games_count}</td>
            <td style={{width:"20%", textAlign:"center"}}><ChartAgeRate setting={item.win_rate}/> {item.win_rate}%</td>
            
          </tr>
          ))}
        </tbody>
      </table>
  );
}

export default ListReports;
 
    