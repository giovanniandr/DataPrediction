import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Analytics from "./Analytics";
import Predictions from "./Predictions";
import Notebook from "./Notebook";

ReactDOM.render(
    <Router> 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/notebook" element={<Notebook />} />
        </Routes>
    </Router>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
