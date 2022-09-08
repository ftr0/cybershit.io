import { Button, Input, TextBox,  Option, Select} from "../style/StyleControls"

const PostEmail = () => {


  return (
    <div>
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
    </div>
  );
}

export default PostEmail;
