import React, { useState} from 'react';
import PageCode from './pages/PageCode';
import FadeIn from 'react-fade-in';
import { Link } from "./style/StyleControls"
import { Page, HeaderPage, FooterPage } from "./style/StylePage"
import PageHome from './pages/PageHome';
import PageAge from './pages/PageAge';

const App = () => {
  const [site, setSite] = useState("home");
  return (
    <Page>
      <HeaderPage style={{display: "flow-root", backgroundColor:"#2c343f", color: "white"}}>
        <Link onClick={() => setSite("home")} > <img src="https://cybershit.io/icons/home.ico"      width="14" height="14" /> home</Link>
        <Link onClick={() => setSite("code")} > <img src="https://cybershit.io/icons/database.ico"   width="14" height="14" /> database</Link>
        <Link onClick={() => setSite("age")} >    <img src="https://cybershit.io/icons/ritter.ico"     width="14" height="14" /> age4</Link>
        <Link style={{float: 'right'}}onClick={() => setSite("settings")} ><img src="https://cybershit.io/icons/gear.ico"  width="14" height="14" /> settings</Link>
      </HeaderPage>
      <FadeIn>
        { site === 'home' &&  <PageHome />}
        { site === 'code' && <PageCode /> }
        { site === 'age' && <PageAge /> }
      </FadeIn>
    </Page>
  );
}

export default App;
