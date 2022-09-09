import React, { useState, useEffect } from 'react';
import { CommentBody, CommentBox, CommentHeader, Table} from "../style/StyleComments"

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
      <h2>comments</h2>
{comments.map(comment => (
  <>
  <Table>

<tr style={{backgroundColor:"lightblue"}}>
  <td style={{width:"20%", padding: "50px", backgroundColor:"#283b59"}}>


              <img src={comment.avatar} width="100%" /><br/><br/>
              {comment.author}

  </td>
  <td style={{width:"80%", padding: "50px", backgroundColor:"#423b59"}}>
  <b>{new Intl.DateTimeFormat('en-GB', {
                  month: 'long',
                  day: '2-digit',
                  //year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  //second: '2-digit',
              }).format(new Date(comment.date))} Uhr</b><br/><br/>
          {comment.comment
                      .replace(':-)', '😜')
                      .replace(':-(', '😒')
                      .replace(':_(', '😂')
                      .replace('*engel*', '😂')
         }
  </td>
</tr>
</Table>
</>
   ))}

    </div>
  );
}

export default ListComments;
