import * as React from "react";
import * as Radium from 'radium';
import LandingPage from './LandingPage';

import zendeskAPI from '../api/zendesk';

const logo = require('../images/sb_logo_light.png');

interface state {
    enter: boolean
}

class App extends React.Component<any, state> {
    constructor(props: any){
        super(props);
        this.state = {
            enter: false,
        }
    }

    onEnter = () => {
        console.log("click")
        zendeskAPI.authUser();
        this.setState(x => ({enter: !x.enter}));
    }
    
    getPage = () => {
        if(this.state.enter){
            return <div>Redirecting...</div>
        }
        return <LandingPage onEnter={this.onEnter}/>;
    }

    render() {
        return (
            this.getPage()
        )
    }

};
//'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
 export default App;
 