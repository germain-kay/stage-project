import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import './app.css';
import App from './App.jsx';

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return
    }
    const { worker } = await import('./_mock/browser.js');
    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start()
}

enableMocking().then(() => {
    ReactDOM.createRoot(document.getElementById("root")).render(
        <Router>
            <App />
        </Router>
    );
});

