import React, { useState} from 'react';
import Login from './pages/PageAdmin';
import PageCode from './pages/PageCode';
import FadeIn from 'react-fade-in';
import { Link } from "./style/StyleControls"
import { Page, HeaderPage, FooterPage } from "./style/StylePage"
import ListComments from "./pages/PageComments"
import FormComment from './components/FormComment';
import Chart from './components/chart';


const App = () => {
  let click = new Audio("https://cybershit.io/sounds/click1.mp3")

  const [site, setSite] = useState("home");

  function siteHome() { setSite("home");click.play(); }
  function siteCode() { setSite("code");click.play(); }
  function siteComments() { setSite("comments");click.play(); }
  function siteAdmin() { setSite("admin");click.play(); }
  
  return (
    <Page>
      <HeaderPage>
        <Link onClick={siteHome}>🏠</Link>
        <Link onClick={siteCode}>📁</Link>
        <Link onClick={siteComments}>💬</Link>
        <Link onClick={siteAdmin}>⚙️</Link>
      </HeaderPage>

      <FadeIn>
        { site === 'home' &&  <h2>cybershit.io</h2>}
        { site === 'home' &&  <img src="https://cybershit.io/images/logo.svg" width="20%"/>}
        { site === 'home' &&  <p>coding cheat sheets</p>}
        { site === 'home' &&  <p>„best friend of Anwendungsentwickler“</p>}
        { site === 'home' &&  <br/>}
        { site === 'home' &&  <br/>}
        { site === 'home' &&  <h2>available code</h2>}
        <div style={{width:"50%", marginLeft:"25%",marginRight:"25%"}}>{ site === 'home' &&  <Chart/>}</div>
        { site === 'comments' &&  <ListComments />}
        { site === 'comments' &&  <FormComment />}
        { site === 'admin' && <Login /> }
        { site === 'code' && <PageCode /> }
      </FadeIn>
      <FooterPage>
        <a href="https://github.com/ftr0/cybershit.io" target="_blank">view source on github</a>
      </FooterPage>
    </Page>
  );
}

export default App;
