import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';


import Store from './app/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Router>
            <Provider store={Store}>
                <App />
            </Provider>
        </Router>


    </>
);

