import React, { useState} from 'react';
import Login from './pages/PageAdmin';
import PageCode from './pages/PageCode';
import FadeIn from 'react-fade-in';
import { Link } from "./style/StyleControls"
import { Page, Header, FooterPage } from "./style/StylePage"
import ListComments from "./components/ListComments"
import FormComment from './components/FormComment';

const App = () => {
  let click = new Audio("https://cybershit.io/sounds/click1.mp3")

  const [site, setSite] = useState("home");

  function siteHome() { setSite("home");click.play(); }
  function siteCode() { setSite("code");click.play(); }
  function siteComments() { setSite("comments");click.play(); }
  function siteAdmin() { setSite("admin");click.play(); }
  
  return (
    <Page>
      <Header>
        <Link  onClick={siteHome}>🏠</Link>
        <Link  onClick={siteCode}>📁</Link>
        <Link  onClick={siteComments}>💬</Link>
        <Link  onClick={siteAdmin}>⚙️</Link>
      </Header>

      <FadeIn>
        { site === 'home' &&  <h1 style={{fontSize:"20px",padding: "20px", backgroundColor: "", letterSpacing:"20px"}}>cybershit.io</h1>}
        { site === 'home' &&  <img src="https://cybershit.io/images/logo.svg" width="20%"/>}
        { site === 'home' &&  <p>coding cheat sheets</p>}
        { site === 'home' &&  <p>„best friend of Anwendungsentwickler“</p>}
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
