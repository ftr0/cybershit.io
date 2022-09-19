import ReactApexChart from "react-apexcharts";
import {useState, useEffect} from 'react'

type RadarInfos = {
  java: any;
  spring: any;
  react: any;
  css: any;
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
  var java = temp?.java;
  var spring = temp?.spring;
  var react = temp?.react;
  var php = temp?.php;
  var other = 6;


  const config = {
    options: {
      chart: { toolbar: { show: false }  },
      labels: [ "Java", "Spring", "React", "php","other" ],
      stroke: { width: 3 },
      fill: { opacity: 0.5 },
      markers: {
        size: 0
    },
      tooltips: false,
    }
  };

  return (
    <ReactApexChart options={config.options} series={[ { 
      data: [ java, spring, react, php,other] 
    } ]} type="radar" />
  );
};

export default Radar;
