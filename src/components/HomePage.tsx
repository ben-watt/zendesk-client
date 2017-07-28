import * as React from 'react';
import zendeskAPI from '../api/zendesk';

const css = require('./HomePage-styles.css');

interface props {};
interface state {};

class HomePage extends React.Component<props, state> {
    constructor(props: props){
        super(props);
    }

    async componentDidMount() {
        const data = await zendeskAPI.getTickets();
        console.log(data);
    }

    render() {
        return (
            <div className={css.container}>Hello</div>
        )
    }
}

export default HomePage;