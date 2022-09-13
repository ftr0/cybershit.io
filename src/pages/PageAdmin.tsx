import React, { useState} from 'react';
import { ButtonSend,  TextBox, Error, Input} from "../style/StyleControls"
import FormReport from "../components/FormReport"
const PostComment = () => {
    const [token, setToken] = useState("");
    const [check, setCheck] = useState("");

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
      }

      const handleChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
        let audioClick1 = new Audio("https://cybershit.io/sounds/click1.mp3")
        audioClick1.play();
      };


  return (
    <div>
<h2>admin panel</h2>
<br/>

        { check == 'yes' ? <p></p> : <p>enter token:</p> }<br/>
        { check == 'yes' ? <FormReport/> : <Input type="password"  onChange={handleChangeAuthor} value={token} /> }<br/>
        { check == 'yes' ? <p></p>:  <ButtonSend onClick={handleClick}>enter </ButtonSend> }<br/>
        { check == 'no' && <Error>wrong token</Error> }
    </div>
  );
}

export default PostComment;
