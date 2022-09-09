import React, { useState} from 'react';
import { Button,  TextBox, Error, Input, Option, Select} from "../style/StyleControls"

const PostComment = () => {

const [date, setDate] = useState('');
const [content, setContent] = useState('');
const [homeoffice, setHomeoffice] = useState('yes');
const [krank, setKrank] = useState('no');
const [rating, setRating] = useState('5');

function handleClick() {
  let audioClick2 = new Audio("https://cybershit.io/sounds/click2.mp3");
  audioClick2.play();
    fetch('https://cybershit.io/api/addReport.php', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        date: date,
        content: content,
        homeoffice: homeoffice,
        krank: krank,
        rating: rating,
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
const handleChangeKrank = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setKrank(event.target.value);
  let audioClick1 = new Audio("https://cybershit.io/sounds/click1.mp3");
  audioClick1.play();
};
const handleChangeRating = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setRating(event.target.value);
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
         krank: <Select  name="krank" id="rating" onChange={handleChangeKrank}>
                  <option value="no">no</option>
                  <option value="yes">yes</option>

                </Select>
         rating: <Select  name="rating" id="rating" onChange={handleChangeRating}>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
         </Select>


        <Button onClick={handleClick}> post new report</Button>
    </div>
  );
}

export default PostComment;
