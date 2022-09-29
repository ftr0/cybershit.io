import { Badge, Option, Select, Button, BadgeStared, TextBox} from "../style/StyleControls"
import { BadgeBox, CodeArea, Container } from "../style/StylePage"
import React, { useState, useEffect } from 'react';

type Code = {
  filename: string;
  content: string;
  stared: string;
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
  const [filename, setFilename] = useState<string>("loading...")
  const [stared, setStared] = useState()
  const [source, setSource] = useState("loading...")
  const [codes, setCodes] = useState<Code[]>([])

  useEffect(() => {
    getPosts()
    const interval=setInterval(()=>{
     },1000)
     return()=>clearInterval(interval)
  }, [])


  function getPosts() {
    fetch('https://www.cybershit.io/api/JSONCodeJava.php').then(response => response.json()).then(res => setCodeJavaList(res)).then(() => setStatusCodeJava("java code"));
    fetch('https://www.cybershit.io/api/JSONCodeReact.php').then(response => response.json()).then(res => setCodeReactList(res)).then(() => setStatusCodeReact("react code"));
    fetch('https://www.cybershit.io/api/JSONCodeSpring.php').then(response => response.json()).then(res => setCodeSpringList(res)).then(() => setStatusCodeSpring("spring boot code"));
    fetch('https://www.cybershit.io/api/JSONCodeOther.php').then(response => response.json()).then(res => setCodeOtherList(res)).then(() => setStatusCodeOther("other code"));
    fetch('https://www.cybershit.io/api/displayStared.php').then(response => response.json()).then(res => setCodes(res)).then(() => setStared(stared)).then(() => setSource("print hello world"))
  }



  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([source], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = filename+".txt";
    document.body.appendChild(element);
    element.click();
  };


  const handleChange = (filename:any, content:any, stared:any) => {
    let audioClick1 = new Audio("https://cybershit.io/sounds/click1.mp3")
    audioClick1.play();
    setSource(content);
    setFilename(filename);
    setStared(stared);
  };

  function starCode() {
    let audioClick1 = new Audio("https://cybershit.io/sounds/click1.mp3")
    audioClick1.play();
      fetch('https://cybershit.io/api/changeStared.php', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          filename: filename,
          stared: 1
        })
      })
      getPosts()
  }

  return (
    <div>
      <Container>
      <h1>coding cheats sheets</h1>
      menu
        <Select><Option>{StatusCodeJava}</Option>{codeJavaList.map(code => (<Option onClick={event => {handleChange(code.filename, code.content, code.stared)}}>{code.filename}</Option>))}</Select>
        <Select><Option>{StatusCodeSpring}</Option>{codeSpringList.map(code => (<Option onClick={event => {handleChange(code.filename, code.content, code.stared)}}>{code.filename}</Option>))}</Select>
        <Select><Option>{StatusCodeReact}</Option>{codeReactList.map(code => (<Option onClick={event => {handleChange(code.filename, code.content, code.stared)}}>{code.filename}</Option>))}</Select>
        <Select><Option>{StatusCodeOther}</Option>{codeOtherList.map(code => (<Option onClick={event => {handleChange(code.filename, code.content, code.stared)}}>{code.filename}</Option>))}</Select>
          options
        <Button onClick={starCode}>
            { stared ==='star' ? "☆unstar" :"★star"}
        </Button>
        <Button >edit</Button>
        <Button onClick={downloadFile}>download file</Button>
        
        <BadgeBox>
          {codes.map(code => (
          <span>
             <BadgeStared onClick={event => {handleChange(code.filename, code.content, code.stared)}}>★{code.filename}</BadgeStared>
          </span>
          ))}
          </BadgeBox>

          </Container>
          <CodeArea id ="test"><pre>{source}</pre> </CodeArea>
       
        <Container>
          {codeJavaList.map(code => (<Badge onClick={event => {handleChange(code.filename, code.content, code.stared)}} >{code.filename}</Badge>))}
          {codeReactList.map(code => (<Badge onClick={event => {handleChange(code.filename, code.content, code.stared)}} >{code.filename}</Badge>))}
          {codeSpringList.map(code => (<Badge onClick={event => {handleChange(code.filename, code.content, code.stared)}} >{code.filename}</Badge>))}
          {codeOtherList.map(code => (<Badge onClick={event => {handleChange(code.filename, code.content, code.stared)}} >{code.filename}</Badge>))}
        </Container>
      </div>
  );
}

export default PageCode;