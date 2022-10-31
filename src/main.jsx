import React from 'react'
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import Header from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    </React.StrictMode>
)
