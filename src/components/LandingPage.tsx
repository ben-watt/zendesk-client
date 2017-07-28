import * as React from "react";
const css = require('./LandingPage-styles.css');
const logo = require('../images/sb_logo_light.png');

interface props {
    onEnter: {(): void;}
}
interface state {
    btnStyle: any[]
}

class LandingPage extends React.Component<props, state> {
    constructor(props: props){
        super(props)
        this.state = {
            btnStyle: [css.enterBtn],
        }
    }

    onClick = () => {
        this.setState(prevState => ({ btnStyle: [css.whiteOut]})); 
        this.props.onEnter();
    }

    render() {
        return (       
                <div className={css.grid}>
                    <div className={css.text}>
                        <img src={logo} alt="sharedo-logo" className={css.logo}/>
                        <h1 className={css.title}>Customer Support Portal</h1>
                    </div>
                    <button onClick={this.onClick} className={this.state.btnStyle.join(' ')}>Enter</button>
                </div>
        )
    }
};

 export default LandingPage;
 