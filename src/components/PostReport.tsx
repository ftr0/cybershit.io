import React, { useState} from 'react';
import { Button,  TextBox, Error, Input, Option, Select} from "../style/StyleControls"

const PostComment = () => {

const [date, setDate] = useState('');
const [content, setContent] = useState('');
const [homeoffice, setHomeoffice] = useState('');
const [start, setStart] = useState('');
const [end, setEnd] = useState('');
const [krank, setKrank] = useState('');
const [rating, setRating] = useState('');

function handleClick() { 
    fetch('https://cybershit.io/api/addReport.php', {  
      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify({
        date: date,
        content: content,
        homeoffice: homeoffice,
        start: start,
        end: end,
        krank: krank,
        rating: rating,
      })
    })
}

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => { setDate(event.target.value);};
  const handleChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {setContent(event.target.value);};
  const handleChangeHomeoffice = (event: React.ChangeEvent<HTMLSelectElement>) => {setHomeoffice(event.target.value);};
  const handleChangeStart = (event: React.ChangeEvent<HTMLInputElement>) => {setStart(event.target.value);};
  const handleChangeEnd = (event: React.ChangeEvent<HTMLInputElement>) => {setEnd(event.target.value);};
  const handleChangeKrank = (event: React.ChangeEvent<HTMLSelectElement>) => {setKrank(event.target.value);};
  const handleChangeRating = (event: React.ChangeEvent<HTMLSelectElement>) => {setRating(event.target.value);};



  return (
    <div>   








        date: <Input type="date" maxLength={15} onChange={handleChangeDate} value={date} /> <br/>
        content:<br/><br/> <TextBox maxLength={600}  onChange={handleChangeContent} value={content} ></TextBox><br/>

        homeoffice: <Select  name="homeoffice" id="rating" onChange={handleChangeHomeoffice}>
                  <Option value="yes">yes</Option>
                  <Option value="no">no</Option>
         </Select>



    
         krank: <Select  name="krank" id="rating" onChange={handleChangeKrank}>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
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