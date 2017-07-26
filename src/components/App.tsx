import * as React from "react";
import * as Radium from 'radium';
import LandingPage from './LandingPage';
import { Route } from 'react-router-dom';

import zendeskAPI from '../api/zendesk';
import url from '../common/urlParser';

const logo = require('../images/sb_logo_light.png');

interface state {
    loggedIn: boolean
}

class App extends React.Component<any, state> {
    constructor(props: any){
        super(props);
        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount(){
        const queryParams = url.getQueryParams();
        const zendeskCode = queryParams.find(x => x.key === 'code');
        if(zendeskCode){
            zendeskAPI.requestAccessCode(zendeskCode.value);
            return
        }
    }

    onEnter = () => {
        zendeskAPI.redirectToAuth().then(() => this.setState(x => ({loggedIn: !x.loggedIn})));
    }

    render() {
       

        return (
            <LandingPage onEnter={this.onEnter}/>
        )
    }

};
//'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
 export default App;
 