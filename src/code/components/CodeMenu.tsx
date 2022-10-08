import { Badge } from "../style/StyleControls"
import { CodeMenu } from "../style/StylePage"
import React, { useState, useEffect } from 'react';
import {Filename} from "../types/Filename"

const Test  = () => {
  const [codeList, setCodeList] = useState<Filename[]>([])
  const [source, setSource] = useState("loading...")
  

  useEffect(() => {
    fetch('https://www.cybershit.io/api/JSONCodeList.php').then(response => response.json()).then(res => setCodeList(res));
    const interval=setInterval(()=>{
     },1000)
     return()=>clearInterval(interval)
  }, [])

  const handleChange = (filename:any, content:any, stared:any) => {
    setSource(content);
  };

  return (
      <CodeMenu>
       {codeList.map(code => ( <Badge onClick={() => {handleChange(code.filename, code.content, code.stared)}} >{code.filename}</Badge >))}
      </CodeMenu>
  );
}

export default Test;