import { PieChart } from "react-minimal-pie-chart";
import {Settings} from "../types/Setings"

const ChartAgeRate = (props: Settings) =>
{
  const test = props.setting;
  const test2 = 100 - props.setting;
  return (
    <PieChart style={{width:"20px"}}
    data={[
      {
        title: "win: "+ test + "%",
        value: test,
        color: 'lightblue'
      },
      {
        title: 'lose: '+ test2 + "%",
        value: test2,
        color: 'papayawhip'
      }
      ]}
    />
  );
}

export default ChartAgeRate;