import PageHome from './pages/PageHome';
import PageComments from './pages/PageComments';
import PageEmail from './pages/PageEmail';
import PageReports from './pages/PageReports';
import Login from './components/Login';
import Footer from './components/Footer';
import PageCheatSheets from './pages/PageCheatSheets';


import FadeIn from 'react-fade-in';
import { Link} from "./style/StyleControls"
import { Page,  Header} from "./style/StylePage"
import React, { useState, useEffect} from 'react';


const App = () => {
  let click = new Audio("https://cybershit.io/sounds/click1.mp3")
  const [site, setSite] = useState("home");



  function siteHome() { setSite("home");click.play(); }
  function siteComments() { setSite("comments");click.play(); }
  function siteEmail() { setSite("email");click.play(); }
  function siteReports() { setSite("reports");click.play(); }
  function siteAdmin() { setSite("admin");click.play(); }
  function siteCheatSheets() { setSite("cheatsheets");click.play(); }

  return (
    <Page  >
    <Header>
      <Link  onClick={siteHome}> home</Link>
      <Link  onClick={siteComments}> comments</Link>
      <Link  onClick={siteEmail}> email</Link>
      <Link  onClick={siteReports}> reports</Link>
      <Link  onClick={siteAdmin}> admin</Link>
      <Link  onClick={siteCheatSheets}> cheatsheets</Link>
    </Header>
      <FadeIn>
        { site==='home' && <PageHome /> }
        { site==='comments' && <PageComments /> }
        { site==='email' && <PageEmail /> }
        { site==='reports' && <PageReports /> }
        { site==='admin' && <Login /> }
        { site==='cheatsheets' && <PageCheatSheets /> }
      </FadeIn>
      <Footer/>
    </Page>
  );
}

export default App;
