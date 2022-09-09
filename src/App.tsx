import PageHome from './pages/PageHome';
import PageComments from './pages/PageComments';
import PageContact from './pages/PageContact';
import PageReports from './pages/PageReports';
import Login from './components/Login';
import Footer from './components/Footer';
import PageCode from './pages/PageCode';


import FadeIn from 'react-fade-in';
import { Link} from "./style/StyleControls"
import { Page,  Header} from "./style/StylePage"
import React, { useState, useEffect} from 'react';


const App = () => {
  let click = new Audio("https://cybershit.io/sounds/click1.mp3")
  const [site, setSite] = useState("home");



  function siteHome() { setSite("home");click.play(); }
  function siteComments() { setSite("comments");click.play(); }
  function siteContact() { setSite("contact");click.play(); }
  function siteReports() { setSite("reports");click.play(); }
  function siteAdmin() { setSite("admin");click.play(); }
  function siteCode() { setSite("code");click.play(); }

  return (
    <Page  >
    <Header>
      <Link  onClick={siteHome}>🏠</Link>
      <Link  onClick={siteCode}>📁</Link>
      <Link  onClick={siteComments}>💬</Link>
      <Link  onClick={siteReports}>📖</Link>
      <Link  onClick={siteContact}>📧</Link>
      <Link  onClick={siteAdmin}>⚙️</Link>
    </Header>
      <FadeIn>
        { site==='home' && <PageHome /> }
        { site==='comments' && <PageComments /> }
        { site==='contact' && <PageContact /> }
        { site==='reports' && <PageReports /> }
        { site==='admin' && <Login /> }
        { site==='code' && <PageCode /> }
      </FadeIn>
      <Footer/>
    </Page>
  );
}

export default App;
