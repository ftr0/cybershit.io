import React, { useState, useEffect } from 'react';
import { Wrapper} from "../style/StylePage"
import { Table, Column1, Column2, Column3, Column4} from "../style/StyleComments"
import {Comment} from "../types/Comment"

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
    <Wrapper>
      <Table>
        {comments.map(comment => (
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
        ))}
      </Table>
    </Wrapper>
  );
}

export default ListComments;