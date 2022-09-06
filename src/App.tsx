import PageHome from './pages/PageHome';
import PageComments from './pages/PageComments';
import PageEmail from './pages/PageEmail';
import PageReports from './pages/PageReports';

import { Page, Link, Header} from "./style/style"
import { Routes, Route} from "react-router-dom";

const App = () => {

  return (
    <Page>
      <Link href="/">home</Link> 
      <Link href="/comments">comments</Link>
      <Link href="/email">email</Link>
      <Link href="/reports">reports</Link>
      <Header>cybershit.io</Header>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="comments" element={<PageComments />} />
        <Route path="email" element={<PageEmail />} />
        <Route path="reports" element={<PageReports />} />
      </Routes>
    </Page>
  );
}

export default App;
