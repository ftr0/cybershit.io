import React, { useState, useEffect } from 'react';
import { Table, Column1, Column2, Column3, Column4} from "../style/StyleComments"

type Code = {
  filename: string;
}

const ListComments = () => {

const [codes, setCodes] = useState<Code[]>([])
const [error, setError] = useState({})

function getPosts() {
    fetch('https://www.cybershit.io/api/displayStared.php')
    .then(response => response.json())
    .then(res => setCodes(res))
    .catch(err => setError(err))
      console.log(error);
  }

  useEffect(() => {
    getPosts()
    const interval=setInterval(()=>{
      getPosts()
     },5000)
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

export default ListComments;