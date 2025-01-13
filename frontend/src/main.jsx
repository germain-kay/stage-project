import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import './app.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <App />
    </Router>
)
