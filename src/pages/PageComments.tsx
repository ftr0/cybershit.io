import React, { useState, useEffect } from 'react';
import { Table} from "../style/StyleComments"

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
      <Table>
        {comments.map(comment => (
          <>
            <tr>
              <td style={{width:"5%", padding: "10px", backgroundColor:"#283b59"}}>
                <img src={comment.avatar} width="100%" />
              </td>
              <td style={{width:"10%", padding: "10px", backgroundColor:"#283b59"}}>
                {comment.author}
              </td>
              
              <td style={{width:"80%", padding: "20px", backgroundColor:"#423b59"}}>
                  {comment.comment
                              .replace(':-)', '😜')
                              .replace(':-(', '😒')
                              .replace(':_(', '😂')
                              .replace('*engel*', '😂')
                }
              </td>
              <td style={{width:"4%", padding: "10px", backgroundColor:"#283b59"}}>
              <img src="https://cdn.pixabay.com/photo/2013/07/12/16/33/clock-hands-151141_960_720.png" width="100%" title={new Intl.DateTimeFormat('en-GB', {
                          month: 'long',
                          day: '2-digit',
                          //year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          //second: '2-digit',
                      }).format(new Date(comment.date))} />
              </td>
            </tr>
          </>
          ))}
          </Table>
    </div>
  );
}

export default ListComments;