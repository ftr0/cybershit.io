import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Code from './code/App';
import Home from './home/App';
import Age from './age/App';
import { Page , HeaderPage, Link,Avatar, LinkRight } from "./style"

let HomeIcon = "https://cybershit.io/icons/home.ico";
let DatabaseIcon = "https://cybershit.io/icons/database.ico";
let AgeIcon = "https://cybershit.io/icons/ritter.ico";
let SettingsIcon = "https://cybershit.io/icons/gear.ico";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Page>
    <React.StrictMode>
      <HeaderPage>
        <Link href='/home'> <Avatar src={HomeIcon}/> home </Link>
        <Link href='/code'> <Avatar src={DatabaseIcon}/> database </Link>
        <Link href='/age'> <Avatar src={AgeIcon}/> age4 </Link>
        <LinkRight href='/settings'> <Avatar src={SettingsIcon}/> settings </LinkRight>
      </HeaderPage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path="/code" element={ <Code/> } />
          <Route path="/age" element={ <Age/> } />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Page>
);
