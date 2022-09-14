
import { Option, Select, Button} from "../style/StyleControls"
import { CodeArea } from "../style/StylePage"
import React, { useState, useEffect } from 'react';
import { Badge } from "../style/StyleControls"
import { BadgeBox } from "../style/StylePage"
type Code = {
  filename: string;
  content: string;
}

const PageCode  = () => {
  const [StatusCodeJava, setStatusCodeJava] = useState<string>("loading...")
  const [StatusCodeReact, setStatusCodeReact] = useState<string>("loading...")
  const [StatusCodeSpring, setStatusCodeSpring] = useState<string>("loading...")
  const [StatusCodeOther, setStatusCodeOther] = useState<string>("loading...")
  const [codeJavaList, setCodeJavaList] = useState<Code[]>([])
  const [codeReactList, setCodeReactList] = useState<Code[]>([])
  const [codeSpringList, setCodeSpringList] = useState<Code[]>([])
  const [codeOtherList, setCodeOtherList] = useState<Code[]>([])
  const [source, setSource] = useState("choose code from dropdown menu");






  useEffect(() => {
   
    fetch('https://www.cybershit.io/api/service.php?info=codeJava').then(response => response.json()).then(res => setCodeJavaList(res)).then(() => setStatusCodeJava("java code"));
    fetch('https://www.cybershit.io/api/service.php?info=codeReact').then(response => response.json()).then(res => setCodeReactList(res)).then(() => setStatusCodeReact("react code"));
    fetch('https://www.cybershit.io/api/service.php?info=codeSpring').then(response => response.json()).then(res => setCodeSpringList(res)).then(() => setStatusCodeSpring("spring boot code"));
    fetch('https://www.cybershit.io/api/service.php?info=codeOther').then(response => response.json()).then(res => setCodeOtherList(res)).then(() => setStatusCodeOther("other code"));
    const interval=setInterval(()=>{
    
     },50000)
     return()=>clearInterval(interval)
  }, [])


  const handleChange = (event:any) => {
    let audioClick1 = new Audio("https://cybershit.io/sounds/click1.mp3")
    audioClick1.play();
    setSource(event.target.value);
  };

 let content = "heftig";

const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([content], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "test.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <h2>Coding Cheats Sheets</h2>
      
        <Select onChange={handleChange}><Option>{StatusCodeJava}</Option>{codeJavaList.map(code => (<Option value={code.content}>{code.filename}</Option>))}</Select>
        <Select onChange={handleChange}><Option>{StatusCodeSpring}</Option>{codeSpringList.map(code => (<Option value={code.content}>{code.filename}</Option>))}</Select>
        <Select onChange={handleChange}><Option>{StatusCodeReact}</Option>{codeReactList.map(code => (<Option value={code.content}>{code.filename}</Option>))}</Select>
        <Select onChange={handleChange}><Option>{StatusCodeOther}</Option>{codeOtherList.map(code => (<Option value={code.content}>{code.filename}</Option>))}</Select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={downloadFile}>download as file</Button>
        <Button onClick={downloadFile}>download as pdf</Button>
        <br/>
        <CodeArea id ="test"><pre>{source}</pre> </CodeArea>

        <BadgeBox>
          {codeJavaList.map(code => (<Badge onClick={handleChange} value={code.content}>{code.filename}</Badge>))}
          {codeReactList.map(code => (<Badge onClick={handleChange} value={code.content}>{code.filename}</Badge>))}
          {codeSpringList.map(code => (<Badge onClick={handleChange} value={code.content}>{code.filename}</Badge>))}
          {codeOtherList.map(code => (<Badge onClick={handleChange} value={code.content}>{code.filename}</Badge>))}
        </BadgeBox>
      </div>
  );
}

export default PageCode;