import React, { useState, useEffect } from 'react';
import { Table, Column1, Column2, Column3, Column4} from "../style/StyleComments"

type Comment = {
  date: Date;
  author: string;
  comment: string;
  avatar: string;
}

const ListComments = () => {

const [comments, setComments] = useState<Comment[]>([])
const [error, setError] = useState({})
let uhr = "https://cdn.pixabay.com/photo/2014/04/02/14/05/clock-306096_960_720.png";



function getPosts() {
    fetch('https://www.cybershit.io/api/getComments.php')
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
      <Table>
        {comments.map(comment => (
          <div style={{backgroundColor:"#191421", marginBottom:"10px", border: "1px solid black", borderRadius:"10px"}}>
            <tr>
              <Column1><img src={comment.avatar} width="100%"/></Column1>
              <Column2>{comment.author}: </Column2>
              <Column3>
                {comment.comment
                    .replace(':-)', '😜')
                    .replace(':-(', '😒')
                    .replace(':_(', '😂')
                    .replace('*engel*', '😂')
                }
              </Column3>
              <Column4>
              <img src={uhr} width="100%" title={new Intl.DateTimeFormat('en-GB', {
                    month: 'long',
                    day: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }).format(new Date(comment.date))} />
              </Column4>
            </tr>
          </div>
          ))}
          </Table>
    </div>
  );
}

export default ListComments;