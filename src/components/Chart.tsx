import ReactApexChart from "react-apexcharts";
import {useState, useEffect} from 'react'

type RadarInfos = {
  java: any;
  spring: any;
  react: any;
  php: any;
  other: any;
}

const Radar = () => {
  const [id, setId] = useState<RadarInfos[]>([])
  const [error, setError] = useState({})

  useEffect(() => {
    fetch('https://cybershit.io/api/displayRadar.php')
    .then(response => response.json())
    .then(res => setId(res))
    .catch(err => setError(err))
  }, [])

  var temp = id.at(0);

  const config = {
    options: {
      chart: { toolbar: { show: false }  },
      labels: [ "Java", "Spring", "React", "php","other" ],
      stroke: { width: 2 },
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
