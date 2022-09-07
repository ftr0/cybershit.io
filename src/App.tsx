import PageHome from './pages/PageHome';
import PageComments from './pages/PageComments';
import PageEmail from './pages/PageEmail';
import PageReports from './pages/PageReports';
import Login from './components/Login';

import FadeIn from 'react-fade-in';
import { Link} from "./style/StyleControls"
import { Page,  Header} from "./style/stylePage"
import React, { useState, useEffect} from 'react';


const App = () => {

  const [site, setSite] = useState("home");

  function siteHome() { setSite("home") }
  function siteComments() { setSite("comments") }
  function siteEmail() { setSite("email") }
  function siteReports() { setSite("reports") }
  function siteAdmin() { setSite("admin") }

  return (
    <Page  >
    <Header>
      <Link onClick={siteHome}> home</Link>
      <Link onClick={siteComments}> comments</Link>
      <Link onClick={siteEmail}> email</Link>
      <Link onClick={siteReports}> reports</Link>
      <Link onClick={siteAdmin}> admin</Link>
    </Header>
      <FadeIn>
        { site==='home' && <PageHome /> }
        { site==='comments' && <PageComments /> }
        { site==='email' && <PageEmail /> }
        { site==='reports' && <PageReports /> }
        { site==='admin' && <Login /> }
      </FadeIn>
    </Page>
  );
}

export default App;
