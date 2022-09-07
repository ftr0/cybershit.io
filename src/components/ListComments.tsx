import React, { useState, useEffect } from 'react';
import { CommentBody, CommentBox, CommentHeader} from "../style/StyleComments"

let anakin = "https://www.cybershit.io/api/thumbs/thumb_anakinskywalker.jpg";
let sebulba = "https://www.cybershit.io/api/thumbs/thumb_sebulba.jpg";

type Comment = {
  date: Date;
  author: string;
  comment: string;
  avatar: string;
}

const ListComments = () => {
const [comments, setComments] = useState<Comment[]>([])
const [error, setError] = useState({})

  function getPosts() {
    fetch('https://www.cybershit.io/api/service.php?info=comments')
    .then(response => response.json())
    .then(res => setComments(res))
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

        



{comments.map(comment => ( 
  <table style={{width:"60%", marginLeft: "20%", marginRight:"20%", marginBottom:"40px"}}>

<tr style={{backgroundColor:"lightblue"}}>
  <td style={{width:"30%", padding: "50px", backgroundColor:"#283b59"}}>
 
    
              <img src={comment.avatar} width="50%" /><br/><br/>
              {comment.author}
          
  </td>
  <td style={{width:"70%", padding: "50px", backgroundColor:"#423b59"}}>
  <b>{new Intl.DateTimeFormat('en-GB', { 
                  month: 'long', 
                  day: '2-digit',
                  //year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  //second: '2-digit',
              }).format(new Date(comment.date))}</b><br/><br/>
          <pre>{comment.comment
                      .replace(':-)', '😜')
                      .replace(':-(', '😒')
                      .replace(':_(', '😂')
                      .replace('*engel*', '😂')

         }</pre>
       
  </td>
</tr>
</table>

   ))}  
   


        
              
              
    
      
    </div>
  );
}

export default ListComments;