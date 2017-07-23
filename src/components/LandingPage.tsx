import * as React from "react";
import * as Radium from 'radium';
import css from './LandingPage-styles';
const logo = require('../images/sb_logo_light.png');

interface props {
    onEnter: {(): void;}
}

const LandingPage = (props: props) => {
    return (
            <div style={css.grid}>
                <div style={css.text}>
                    <img src={logo} alt="sharedo-logo" style={css.logo}/>
                    <h1 style={css.title}>Customer Support Portal</h1>
                </div>
                <button onClick={props.onEnter} style={css.enterBtn}>Enter</button>
            </div>
    )
};

 export default Radium(LandingPage);
 