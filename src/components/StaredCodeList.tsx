import React, { useState, useEffect } from 'react';
import {Filename} from "../types/Filename"

const StaredCodeList = () => 
{
  const [codes, setCodes] = useState<Filename[]>([])

  function getPosts() {
    fetch('https://www.cybershit.io/api/displayStared.php')
    .then(response => response.json())
    .then(res => setCodes(res))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    getPosts()
    const interval=setInterval(()=>{
    getPosts()
    },1000)
    return()=>clearInterval(interval)
  }, [])

  return (
    <div> 
      {codes.map(code => (
      <span>
        <button>★{code.filename}</button>
      </span>
      ))}
    </div>
    );
}

export default StaredCodeList;