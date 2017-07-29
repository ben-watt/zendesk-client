import * as React from 'react';
import zendeskAPI from '../api/zendesk';

import TicketList from './TicketList';
import Button from './Button';
const css = require('./HomePage-styles.css');

interface props {};
interface state {};

class HomePage extends React.Component<props, state> {
    constructor(props: props){
        super(props);
    }

    async componentDidMount() {
        //const tickets = zendeskAPI.getTickets();
        //const org = zendeskAPI.getOrg();
        //let data = await Promise.all([tickets, org]);
        //console.log(data);
    }

    render() {
        return (
            <div className={css.container}>
                <header className={css.header}>
                    <nav>             
                        <i className='fa fa-bars'></i>
                    </nav>
                    <section  className={css.search}>
                        <form>
                            <div className={css.searchIcon}>
                                <i className='fa fa-search'/>
                            </div>
                            <input placeholder='Search...'/>
                        </form>
                    </section>
                </header>
                <section className={css.mainArea}>
                    <TicketList />
                </section>
                <aside className={css.actions}>
                    <Button icon='fa fa-exchange' />
                    <Button icon='fa fa-filter' />
                </aside>
                <footer></footer>
            </div>
        )
    }
}

export default HomePage;