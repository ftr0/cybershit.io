import { Badge, Button, BadgeStared} from "../style/StyleControls"
import { CodeArea, CodeMenu, CodeOptions } from "../style/StylePage"
import React, { useState, useEffect } from 'react';
import {Filename} from "../types/Filename"

const PageCode  = () => {

  const [codeJavaList, setCodeJavaList] = useState<Filename[]>([])
  const [codeReactList, setCodeReactList] = useState<Filename[]>([])
  const [codeSpringList, setCodeSpringList] = useState<Filename[]>([])
  const [codeOtherList, setCodeOtherList] = useState<Filename[]>([])
  const [filename, setFilename] = useState<string>()
  const [stared, setStared] = useState()
  const [source, setSource] = useState("loading...")
  const [codes, setCodes] = useState<Filename[]>([])

  useEffect(() => {
    getPosts()
    const interval=setInterval(()=>{
     },1000)
     return()=>clearInterval(interval)
  }, [])

  function getPosts() {
    fetch('https://www.cybershit.io/api/JSONCodeJava.php').then(response => response.json()).then(res => setCodeJavaList(res));
    fetch('https://www.cybershit.io/api/JSONCodeReact.php').then(response => response.json()).then(res => setCodeReactList(res));
    fetch('https://www.cybershit.io/api/JSONCodeSpring.php').then(response => response.json()).then(res => setCodeSpringList(res));
    fetch('https://www.cybershit.io/api/JSONCodeOther.php').then(response => response.json()).then(res => setCodeOtherList(res));
    fetch('https://www.cybershit.io/api/displayStared.php').then(response => response.json()).then(res => setCodes(res))
  }

  const handleChange = (filename:any, content:any, stared:any) => {
    setSource(content);
    setFilename(filename);
    setStared(stared);
  };

  function starCode() {
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
      <CodeMenu>
        stared<br/>
        {codes.map(code => (
          <BadgeStared onClick={event => {handleChange(code.filename, code.content, code.stared)}}>★{code.filename}</BadgeStared>
        ))}
        <hr/>java<br/>   {codeJavaList.map(code => (<Badge onClick={event => {handleChange(code.filename, code.content, code.stared)}} >{code.filename}</Badge>))}
        <hr/>react<br/>  {codeReactList.map(code => (<Badge onClick={event => {handleChange(code.filename, code.content, code.stared)}} >{code.filename}</Badge>))}
        <hr/>spring<br/> {codeSpringList.map(code => (<Badge onClick={event => {handleChange(code.filename, code.content, code.stared)}} >{code.filename}</Badge>))}
        <hr/>other<br/>  {codeOtherList.map(code => (<Badge onClick={event => {handleChange(code.filename, code.content, code.stared)}} >{code.filename}</Badge>))}
      </CodeMenu>
       
      <CodeArea id ="test">
        <CodeOptions>
          <Button onClick={starCode}>{ stared ==='star' ? "☆unstar" :"★star"} </Button>
          <Button >edit</Button>
        </CodeOptions>    
        <hr/>
        <pre>{source}</pre> 
      </CodeArea>
      </div>
  );
}

export default PageCode;