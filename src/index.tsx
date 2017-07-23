import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import './index.css';

import App from "./components/App";

ReactDOM.render(
    <StyleRoot>
        <App compiler="TypeScript" framework="React" />
    </StyleRoot>,
    document.getElementById("app")
);