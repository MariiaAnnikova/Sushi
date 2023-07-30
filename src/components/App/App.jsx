import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "../Layout/Layout";
import MainPage from "../MainPage/MainPage";

import ContactsPage from "../ContactsPage/ContactsPage";
import AboutMe from "../AboutMe/AboutMe";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={ <MainPage /> } />
    <Route path='contact' element ={<ContactsPage/>} />
    <Route path='about_me' element={<AboutMe/>}/>
        </Route>
    </Routes>
  );
}

export default App;
