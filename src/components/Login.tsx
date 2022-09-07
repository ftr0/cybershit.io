import React, { useState} from 'react';
import { Button,  TextBox, Error, Input} from "../style/StyleControls"
import { Quest } from "../style/stylePage"
import PostReport from ".//PostReport"
const PostComment = () => {

    const [token, setToken] = useState("");
    const [check, setCheck] = useState("");
    const [error, setError] = useState("");

    function handleClick() {

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
      };
    

  return (
    <div>
        <Quest>
            <br/>
            fdwqwfdwqw<br/>
            wdasdfdwqw<br/>
            daqfdwqwqe<br/>
            eqefdwqwqw<br/>
            eqefdwqwqw<br/>
            eqefdwqwqw<br/>
            eqefdwqwqw<br/>
            eqefdwqwqw<br/>
            eqefdwqwqw<br/>
        </Quest>
        <br/><br/><br/>
        token: <br/><Input type="password"  onChange={handleChangeAuthor} value={token} /> <br/><br/>
        <Button onClick={handleClick}>login </Button><br/><br/>
        { check == 'yes' ? <PostReport/> : <p></p>} 
       {check}
     
    </div>
  );
}

export default PostComment;