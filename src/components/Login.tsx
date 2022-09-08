import React, { useState} from 'react';
import { Button,  TextBox, Error, Input} from "../style/StyleControls"
import PostReport from ".//PostReport"
const PostComment = () => {




    const [token, setToken] = useState("");
    const [check, setCheck] = useState("");
    const [error, setError] = useState("");

    function handleClick() {

      let click2 = new Audio("https://cybershit.io/sounds/click2.mp3")
      click2.play();

        fetch('https://www.cybershit.io/api/secToken.php?info='+token, {
          method: 'POST',
          mode: 'cors',
        })
        .then(response => response.text())
        .then((response) => {
       console.log(response)
       setCheck(response.replace(/["]/gi, ''))


   })



   if (check == "yes")
   {

   }
      }


      const handleChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
        let audioClick1 = new Audio("https://cybershit.io/sounds/click1.mp3")
        audioClick1.play();
      };


  return (
    <div>



        { check == 'yes' ? <PostReport/> : <Input type="password"  onChange={handleChangeAuthor} value={token} /> }
        { check == 'yes' ? <p></p>:  <Button onClick={handleClick}>enter </Button> }
        { check == 'no' && <Error>wrong token</Error> }



    </div>
  );
}

export default PostComment;
