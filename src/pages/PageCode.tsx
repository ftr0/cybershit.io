
import { Button, Input, TextBox,  Option, Select} from "../style/StyleControls"
import { CodeArea } from "../style/StylePage"


import React, { useState, useEffect } from 'react';
import { ReportContainer,ReportHeader,ReportBody } from "../style/StyleReports"

type Report = {
  filename: string;
  content: string;
}

const ListReports = () => {
const [reports, setReports] = useState<Report[]>([])
const [error, setError] = useState({})

const [source, setSource] = useState("choose code from dropdown menu");
const [image, setImage] = useState();

let url = "https://cybershit.io/codejavase/"+image+".jpg"

  function getPosts() {
    fetch('https://www.cybershit.io/api/service.php?info=code')
    .then(response => response.json())
    .then(res => setReports(res))
    .catch(err => setError(err))
      console.log(error);
  }


  useEffect(() => {
    getPosts()
    const interval=setInterval(()=>{
      getPosts()
     },15000)
     return()=>clearInterval(interval)
  }, [])

  const handleChange = (event:any) => {
    let audioClick1 = new Audio("https://cybershit.io/sounds/click1.mp3")
    audioClick1.play();

    setSource(event.target.value);
  
  };
  var test ="jojo";
  return (
    <div>
       
         <>
         
       
        
    <div>
    <h2>Cheats Sheets</h2>
    <Select value={source} onChange={handleChange}>
    {reports.map(comment => (
      <Option value={comment.content}>{comment.filename}</Option>
      ))}
    </Select>
<br/>
<CodeArea >
  <pre>{source}</pre>
</CodeArea>
    </div>
  
         
         
         </>
        
    </div>
  );
}

export default ListReports;



