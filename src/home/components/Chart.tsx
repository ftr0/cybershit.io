import ReactApexChart from "react-apexcharts";
import {useState, useEffect} from 'react'
import {RadarChartInfos} from "../types/RadarChartInfos"

const Radar = () => {
  const [id, setId] = useState<RadarChartInfos[]>([])

  useEffect(() => {
    fetch('https://cybershit.io/api/displayRadar.php')
    .then(response => response.json())
    .then(res => setId(res))
  }, [])

  var temp = id.at(0);

  const config = {
    options: {
      plotOptions: {
        radar: {
          polygons: {
            strokeColor: '#e8e8e8',
            fill: { colors: ['#f8f8f8', '#fff'] }
          }
        }
      },
      xaxis: {
        categories: [ "java", "spring", "react", "php","other" ],
        labels: {
          style: {
            colors: ["black","green","blue","red", "purple"],
            fontSize: '15px',
            fontFamily: 'Arial'
          }
        }
      },
      chart: { toolbar: { show: false }},
      fill: { opacity: 0.5 },
      markers: { size: 0 },
    }
  };

  return (
    <ReactApexChart 
      options={config.options} 
      series={[ {  data: [ temp?.java, temp?.spring, temp?.react, temp?.php, 6]  } ]} 
      type="radar" 
    />
  );
};

export default Radar;
