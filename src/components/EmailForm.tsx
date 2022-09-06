import React, { useState, useEffect } from 'react';
import { Button, Input, TextBox, Error, FormWrapper, Option, Select} from "../style/style"

type Comment = {
  author: string;
  email: string;
}

const PostEmail = () => {

  return (
    <FormWrapper>
        <h2>email contact</h2>
        name: <Input type="text" maxLength={15}  /><br/>
        email: <Input type="text" maxLength={15}  /><br/>
        topic: <Select name="topic" id="topic">
        <Option value="support">support</Option>
        <Option value="fpv">fpv</Option>
        <Option value="other">other</Option>
    </Select>
    <br/><br/>
        message: <br/><br/><TextBox maxLength={600}   ></TextBox><br/>
       
        <Button> send email</Button>
    </FormWrapper>
  );
}

export default PostEmail;