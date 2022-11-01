import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx"
import Search from "./components/Search.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="search" element={<Search/>}/>
                <Route
                    path="contact"
                    element={<Contact
                        name={"Jörg Oertel"}
                        address={{street: "Baunehøjvej 6", town: "Lyngby", country: "Denmark"}}/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
