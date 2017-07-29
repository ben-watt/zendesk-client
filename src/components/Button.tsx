import * as React from 'react';
import * as PropTypes from 'prop-types';

const css = require('./Button-styles.css');

interface props {
    icon: string,
    className?: any
}
interface state {}

const Button = (props: props) =>  {
    return <i className={[props.icon , css.btn, props.className].join(' ')}/>
}
   
export default Button;