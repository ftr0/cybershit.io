import Chart from '../components/Chart';
import { ChartDiv,Logo } from "../style/StylePage";
import React, { useState, useEffect } from 'react';

const PostComment = () => {

  type Filename = {
    filename: string;
    category: string;
    uploaded: string;
  }

  const [filenames, setFilenames] = useState<Filename[]>([])





  useEffect(() => {
   
    fetch('https://www.cybershit.io/api/service.php?info=lastUpdates')
    .then(response => response.json())
    .then(res => setFilenames(res));
   
    const interval=setInterval(()=>{
    
     },50000)
     return()=>clearInterval(interval)
  }, [])

  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>cybershit.io</h2>
        <br/>
        <br/>
        <br/>
        <Logo id="logo" src="https://cybershit.io/images/logo.svg"/>
        <p>coding cheat sheets</p>
        <p>„best friend for Anwendungsentwickler“</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>what you can find here?¿?¿?</h2>
        <ChartDiv><Chart/></ChartDiv>

        <h2>last updates</h2>
        <div>
          {filenames.map(file => ( <p>{file.uploaded} {file.filename} (<b>{file.category}</b>)</p> ))}
        </div>
 
    </div>
  );
}

export default PostComment;
