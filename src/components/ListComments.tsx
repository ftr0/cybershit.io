import React, { useState, useEffect } from 'react';
import { CommentBox, CommentHeader} from "../style/style"


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
          <CommentBox> 
            <CommentHeader>
              <i>
            {new Intl.DateTimeFormat('en-GB', { 
                  month: 'long', 
                  day: '2-digit',
                  //year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  //second: '2-digit',
              }).format(new Date(comment.date))} Uhr <br/> 
            </i><img src={comment.avatar} width="70px" height="70px"/><br/> 
              by <b>{comment.author} </b>
              
              </CommentHeader>
              <div>
              <pre>{comment.comment
                      .replace(':-)', '😜')
                      .replace(':-(', '😒')
                      .replace(':_(', '😂')
                      .replace('*engel*', '😂')

              }</pre>
               </div>
          </CommentBox>
         ))}  
    </div>
  );
}

export default ListComments;