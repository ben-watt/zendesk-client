import * as React from 'react';

const css = require('./TicketList-styles.css');

const TicketList = () => {
    return (
        <div className={css.table}>
            <div className={css.tableHeader}>
                <div>Number</div>
                <div>Title</div>
                <div>Description</div>
            </div>
            <div className={css.tableRow}>
                <div>1</div>
                <div>Oh No</div>
                <div>test....</div>
            </div>
            <div className={css.tableRow}>
                <div>2</div>
                <div>Oh No</div>
                <div>test....</div>
            </div>
        </div>
)
}

export default TicketList;