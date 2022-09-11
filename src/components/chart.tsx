import ReactApexChart from "react-apexcharts";
import {useState, useEffect} from 'react'

type RadarInfos = {
  java: any;
  spring: any;
  react: any;
  git: any;
  php: any;
  linux: any;
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
  var git = temp?.git;
  var linux = 2;
  var other = 0;

  const config = {
    options: {
      chart: { toolbar: { show: false }  },
      colors: ["white"],
      labels: [ "Java", "Spring", "React", "php", "git", "linux", "other"  ],
      stroke: { width: 3 },
      fill: { opacity: 0.6 },
      markers: { size: 5 },
      tooltips: false,
    }
  };

  return (
    <>
    <ReactApexChart options={config.options} series={[ { data: [ java, spring, react, php, git, linux, other] } ]} type="radar" />
    </>
  );
};

export default Radar;
