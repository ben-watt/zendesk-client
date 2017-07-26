import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from "./components/App";

ReactDOM.render(
    <Router>
        <StyleRoot>
            <App compiler="TypeScript" framework="React" />
        </StyleRoot>
    </Router>
,document.getElementById("app"));