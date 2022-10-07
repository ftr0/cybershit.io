import React, { useState} from 'react';
import { ButtonSend,  InputChat, Error, Input} from "../style/StyleControls"
import { InputArea, Avatar} from "../style/StylePage"
import { Table, Column1, Column2, Column3, Column4} from "../style/StyleComments"

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

const handleChange = (temp:string) => {
  setAvatarName(temp);
  setAvatar(temp);
};

const handleChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
  const resultAuthor = event.target.value.replace(/[^a-zA-Z0-9-]/gi, '');
  setAuthor(resultAuthor);
  setErrorAuthor("");
};

  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    const resultComment = event.target.value.replace(/[*,/,%,<,>,',`,´,"]/gi, '');
    setComment(resultComment);
    setErrorComment("");
  };

  return (
    <InputArea>
      <Table>
        <Column1><Avatar src={avatar}/></Column1>
        <Column2><Input type="text" maxLength={15} onChange={() => handleChange(author)} /></Column2>
        <Column3><InputChat maxLength={600}  onChange={handleChangeComment} value={comment} ></InputChat></Column3>
        <Column4><ButtonSend onClick={handleClick}>post</ButtonSend></Column4>
      </Table>
      { errorComment == '' ? <p></p> : <Error>{errorComment}</Error>}
      { errorAuthor == '' ? <p></p> : <Error>{errorAuthor}</Error>  }
      <div>
        <Avatar onClick={() => handleChange(ninja)} src={ninja} />
        <Avatar onClick={() => handleChange(monkey)}src={monkey} />
        <Avatar onClick={() => handleChange(pinguin)}src={pinguin} />
        <Avatar onClick={() => handleChange(lamb)}src={lamb} />
        <Avatar onClick={() => handleChange(stranger)}src={stranger}/>
      </div>
    </InputArea>
  );
}

export default PostComment;
