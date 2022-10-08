import { Page, CodeArea, CodeMenu, HeaderPage } from "./style/StylePage"
import React, { useState, useEffect } from 'react';
import {Filename} from "./types/Filename"
import { BadgeJava, BadgeReact, BadgeSpring, BadgeLinux, BadgeGit, BadgePHP } from "./style/StyleBadges"

const PageCode  = () => {
  const [codeList, setCodeList] = useState<Filename[]>([])
  const [source, setSource] = useState("....")
  const [filename, setFilename] = useState()

  useEffect(() => {
    fetch('https://www.cybershit.io/api/JSONCodeList.php').then(response => response.json()).then(res => setCodeList(res));
  }, [])

  const selectFile = (filename:any, content:any) => {
    setSource(content);
    setFilename(filename);
  };

  return (
    <Page>
      <CodeMenu>
        <HeaderPage>files</HeaderPage>
       {codeList.map(code => (
        <>
          { code.category === 'java' &&  <BadgeJava onClick={() => {selectFile(code.filename, code.content)}} >{code.filename}</BadgeJava>}
          { code.category === 'react' &&  <BadgeReact onClick={() => {selectFile(code.filename, code.content)}} >{code.filename}</BadgeReact>}
          { code.category === 'spring' &&  <BadgeSpring onClick={() => {selectFile(code.filename, code.content)}} >{code.filename}</BadgeSpring>}
          { code.category === 'linux' &&  <BadgeLinux onClick={() => {selectFile(code.filename, code.content)}} >{code.filename}</BadgeLinux>}      
          { code.category === 'git' &&  <BadgeGit onClick={() => {selectFile(code.filename, code.content)}} >{code.filename}</BadgeGit>} 
          { code.category === 'php' &&  <BadgePHP onClick={() => {selectFile(code.filename, code.content)}} >{code.filename}</BadgePHP>} 
        </>
        ))}
      </CodeMenu>
       
      <CodeArea>
        <HeaderPage>source</HeaderPage>
        <pre>
          <b>{filename}</b><br/><br/>
          {source}
        </pre> 
      </CodeArea>
    </Page>
  );
}

export default PageCode;