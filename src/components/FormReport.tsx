import React, { useState} from 'react';
import { Button,  TextBox, Input, Option, Select} from "../style/StyleControls"

const PostComment = () => {

const [date, setDate] = useState('');
const [content, setContent] = useState('');
const [homeoffice, setHomeoffice] = useState('yes');


function handleClick() {
  let audioClick2 = new Audio("https://cybershit.io/sounds/click2.mp3");
  audioClick2.play();
    fetch('https://cybershit.io/api/addReport.php', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        filename: date,
        content: content,
        category: homeoffice
      })
    })
}

const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
  setDate(event.target.value);
  let audioClick1 = new Audio("https://cybershit.io/sounds/click1.mp3");
  audioClick1.play();
};

const handleChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  setContent(event.target.value);
  let audioClick1 = new Audio("https://cybershit.io/sounds/click1.mp3");
  audioClick1.play();
};
const handleChangeHomeoffice = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setHomeoffice(event.target.value);
  let audioClick1 = new Audio("https://cybershit.io/sounds/click1.mp3");
  audioClick1.play();
};


  return (
    <div>
        date: <Input type="date" maxLength={15} onChange={handleChangeDate} value={date} /> <br/>
        content:<br/><br/> <TextBox maxLength={600}  onChange={handleChangeContent} value={content} ></TextBox><br/>

        homeoffice: <Select  name="homeoffice" id="rating" onChange={handleChangeHomeoffice}>
                  <Option value="yes">yes</Option>
                  <Option value="no">no</Option>
         </Select>
         
        


        <Button onClick={handleClick}> post new report</Button>
    </div>
  );
}

export default PostComment;
