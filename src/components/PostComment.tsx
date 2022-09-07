import React, { useState} from 'react';
import { Button,  TextBox, Error, Input} from "../style/StyleControls"

let ninja = 'https://cdn.pixabay.com/photo/2017/01/31/13/49/ninja-2024214_960_720.png';
let monkey ="https://cdn.pixabay.com/photo/2014/10/04/22/29/monkey-474147_960_720.png";
let pinguin= "https://cdn.pixabay.com/photo/2013/07/13/13/42/tux-161406_960_720.png";
let lamb= "https://cdn.pixabay.com/photo/2018/07/15/13/29/lamb-3539619_960_720.png";
let stranger ="https://cdn.pixabay.com/photo/2014/12/21/23/59/toy-576514_960_720.png";

const PostComment = () => {
const [avatar, setAvatar] = useState(ninja);
const [avatarName, setAvatarName] = useState('ninja');
const [author, setAuthor] = useState('john doe');
const [comment, setComment] = useState('');
const [errorAuthor, setErrorAuthor] = useState('');
const [errorComment, setErrorComment] = useState('');

function handleClick() {
  
  if (comment == "")
  {
    setErrorComment("you forgot the comment!");
  }

  else if (author == "")
  {
    setErrorAuthor("you forgot your name xD!");
  }
  else
  {
    fetch('https://cybershit.io/comments.php', {  
      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify({
        author: author,
        comment: comment,
        avatar: avatar
      })
    })

    setComment("");
  }
}


const test = (temp:string, temp2:string) => {
 
  setAvatarName(temp2);
  setAvatar(temp);
};

  const handleChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const resultAuthor = event.target.value.replace(/[^a-zA-Z0-9-]/gi, '');
    setAuthor(resultAuthor);
    setErrorAuthor("");
    
  };

  const handleChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const resultComment = event.target.value.replace(/[*,/,%,<,>,',`,´,"]/gi, '');
    setComment(resultComment);
    setErrorComment("");
    
  };


  return (
    <div>
      <div>
        avatar: <br/>
        <img style={{margin:"10px"}} onClick={(event) => test(ninja,'ninja')} src={ninja} width="50px" height="50px"/>
        <img style={{margin:"10px"}} onClick={(event) => test(monkey,'monkey')}src={monkey} width="50px" height="50px"/>
        <img style={{margin:"10px"}} onClick={(event) => test(pinguin,'pinguin')}src={pinguin} width="50px" height="50px"/>
        <img style={{margin:"10px"}} onClick={(event) => test(lamb,'lamb')}src={lamb} width="50px" height="50px"/>
        <img style={{margin:"10px"}} onClick={(event) => test(stranger,'stranger')}src={stranger} width="50px" height="50px"/>
      </div>
   
        name: <Input type="text" maxLength={15} onChange={handleChangeAuthor} value={author} /> @{avatarName}<img src={avatar} width="30px" height="30px"/><br/>
        comment:<br/><br/> <TextBox maxLength={600}  onChange={handleChangeComment} value={comment} ></TextBox><br/>
        { errorComment == '' ? <p></p> : <Error>{errorComment}</Error>} 
        { errorAuthor == '' ? <p></p> : <Error>{errorAuthor}</Error>  } 
        <Button onClick={handleClick}> post comment</Button>
    </div>
  );
}

export default PostComment;