import Chart from '../components/Chart';
import { ChartDiv,Logo, Box} from "../style/StylePage";
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
        <Box>
          <h1>cybershit.io</h1>
          <Logo id="logo" src="https://cybershit.io/images/logo.svg"/>
          <p>coding cheat sheets</p>
          <p>„best friend for Anwendungsentwickler“</p>
        </Box>
        <Box>
          <h2>what you can find here?¿?¿?</h2>
          <ChartDiv><Chart/></ChartDiv>
        </Box>
        <Box>
          <h2>last updates</h2>
          <div>
            {filenames.map(file => ( <p>{file.uploaded} {file.filename} (<b>{file.category}</b>)</p> ))}
          </div>
        </Box>
    </div>
  );
}

export default PostComment;
