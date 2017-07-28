import * as React from "react";
import * as Radium from 'radium';
import { Route } from 'react-router-dom';

import zendeskAPI from '../api/zendesk';
import url from '../common/urlParser';
import HomePage from './HomePage';
import LandingPage from './LandingPage';

const logo = require('../images/sb_logo_light.png');

interface state {
    loggedIn: boolean,
}

class App extends React.Component<any, state> {
    constructor(props: any){
        super(props);
        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount(){
        const queryParams = url.getQuery();
        const zendeskToken = queryParams.find(x => x.key === 'access_token');
        if(zendeskToken){
            this.setState(x => ({loggedIn: !x.loggedIn}));
            zendeskAPI.setAccessToken(zendeskToken.value)
        }
    }

    onEnter = async () => {
        await zendeskAPI.redirectToAuth();
    }

    render() {
        let output = <LandingPage onEnter={this.onEnter}/>
        if(this.state.loggedIn === true){
            output = <HomePage />;
        }
        return output
    }

};

 export default App;
 