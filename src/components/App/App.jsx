import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "../Layout/Layout";
import MainPage from "../MainPage/MainPage";
import Contacts from "../Contacts/Contacts";
import ContactsPage from "../ContactsPage/ContactsPage";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={ <MainPage /> } />
    <Route path='contact' element ={<ContactsPage/>} />
    </Route>
    </Routes>
  );
}

export default App;
