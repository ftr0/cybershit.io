import React, { useState} from 'react';
import Login from './pages/PageAdmin';
import PageCode from './pages/PageCode';
import FadeIn from 'react-fade-in';
import { Link } from "./style/StyleControls"
import { Page, HeaderPage, FooterPage } from "./style/StylePage"
import ListComments from "./pages/PageComments"
import FormComment from './components/FormComment';
import PageHome from './pages/PageHome';
import './style/animation.css';


const App = () => {
  let click = new Audio("https://cybershit.io/sounds/click1.mp3")

  const [site, setSite] = useState("home");

  function siteHome() { setSite("home");click.play(); }
  function siteCode() { setSite("code");click.play(); }
  function siteComments() { setSite("comments");click.play(); }
  function siteAdmin() { setSite("admin");click.play(); }
  
  return (
    <Page>

<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >


      <HeaderPage>
        <Link onClick={siteHome}>🏠</Link>
        <Link onClick={siteCode}>📁</Link>
        <Link onClick={siteComments}>💬</Link>
        <Link onClick={siteAdmin}>⚙️</Link>
      </HeaderPage>

      <FadeIn>
        { site === 'home' &&  <PageHome />}
        { site === 'code' && <PageCode /> }
        { site === 'comments' &&  <ListComments />}
        { site === 'comments' &&  <FormComment />}
        { site === 'admin' && <Login /> }
      </FadeIn>
      <FooterPage>
        <a href="https://github.com/ftr0/cybershit.io" target="_blank">view source on github</a>
      </FooterPage>
    </Page>
  );
}

export default App;
