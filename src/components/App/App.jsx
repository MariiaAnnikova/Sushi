import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "../Layout/Layout";
import MainPage from "../MainPage/MainPage";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={ <MainPage /> } />
    </Route>
    </Routes>
  );
}

export default App;
