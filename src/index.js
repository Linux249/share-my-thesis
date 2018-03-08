import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import createHistory from 'history/createHashHistory'

import './style/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={createHistory}>
        <App />
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
