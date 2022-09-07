import PageHome from './pages/PageHome';
import PageComments from './pages/PageComments';
import PageEmail from './pages/PageEmail';
import PageReports from './pages/PageReports';
import Login from './components/Login';

import FadeIn from 'react-fade-in';

import { Link} from "./style/StyleControls"
import { Page,  Header} from "./style/stylePage"
import { Routes, Route} from "react-router-dom";

const App = () => {

  return (
   
    <Page>
      <FadeIn>
    <Header>
      <Link href="/">home</Link> 
      <Link href="/comments">comments</Link>
      <Link href="/email">email</Link>
      <Link href="/reports">reports</Link>
      <Link href="/admin">admin</Link>
   </Header>
   
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/comments" element={<PageComments />} />
        <Route path="/email" element={<PageEmail />} />
        <Route path="/reports" element={<PageReports />} />
        <Route path="/admin" element={<Login />} />
      </Routes>
      </FadeIn>
    </Page>
  );
}

export default App;
