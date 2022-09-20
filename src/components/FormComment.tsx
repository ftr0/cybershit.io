import React, { useState} from 'react';
import { ButtonSend,  InputChat, Error, Input} from "../style/StyleControls"
import { InputArea, Avatar} from "../style/StylePage"

let ninja = 'https://cdn.pixabay.com/photo/2017/01/31/13/49/ninja-2024214_960_720.png';
let monkey ="https://cdn.pixabay.com/photo/2014/10/04/22/29/monkey-474147_960_720.png";
let pinguin= "https://cdn.pixabay.com/photo/2013/07/13/13/42/tux-161406_960_720.png";
let lamb= "https://cdn.pixabay.com/photo/2018/07/15/13/29/lamb-3539619_960_720.png";
let stranger ="https://cdn.pixabay.com/photo/2014/12/21/23/59/toy-576514_960_720.png";

let click1 = "https://cybershit.io/sounds/click1.mp3";
let click2 = "https://cybershit.io/sounds/click2.mp3";
let click3 = "https://cybershit.io/sounds/click3.mp3";


const PostComment = () => {
const [avatar, setAvatar] = useState(ninja);
const [avatarName, setAvatarName] = useState('ninja');
const [author, setAuthor] = useState('john doe');
const [comment, setComment] = useState('');
const [errorAuthor, setErrorAuthor] = useState('');
const [errorComment, setErrorComment] = useState('');

function handleClick() {
  new Audio(click2).play();
  if (comment == "") { setErrorComment("you forgot the comment!"); }
  else if (author == ""){setErrorAuthor("you forgot your name xD!");}
  else
  {
    fetch('https://cybershit.io/api/addComment.php', {
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
  new Audio(click3).play();
  setAvatarName(temp2);
  setAvatar(temp);
};

const handleChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
  new Audio(click1).play();
  const resultAuthor = event.target.value.replace(/[^a-zA-Z0-9-]/gi, '');
  setAuthor(resultAuthor);
  setErrorAuthor("");
};

  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    new Audio(click1).play();
    const resultComment = event.target.value.replace(/[*,/,%,<,>,',`,´,"]/gi, '');
    setComment(resultComment);
    setErrorComment("");
  };


  return (
    <InputArea>
      <Avatar src={avatar}/><Input type="text" maxLength={15} onChange={handleChangeAuthor} value={author} />
      <InputChat maxLength={600}  onChange={handleChangeComment} value={comment} ></InputChat>
      <ButtonSend onClick={handleClick}> send</ButtonSend>
        { errorComment == '' ? <p></p> : <Error>{errorComment}</Error>}
        { errorAuthor == '' ? <p></p> : <Error>{errorAuthor}</Error>  }
      <div>
        <Avatar onClick={(event) => test(ninja,'ninja')} src={ninja} />
        <Avatar onClick={(event) => test(monkey,'monkey')}src={monkey} />
        <Avatar onClick={(event) => test(pinguin,'pinguin')}src={pinguin} />
        <Avatar onClick={(event) => test(lamb,'lamb')}src={lamb} />
        <Avatar onClick={(event) => test(stranger,'stranger')}src={stranger}/>
      </div>
    </InputArea>
  );
}

export default PostComment;
