import React, {Component} from 'react';
import {Link} from 'react-scroll';

export default class Scroll extends Component {

    render(){
        const { children } = this.props;
        return (
            <Link
                activeClass="active"
                to={this.props.to}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={0}>
                {children}
            </Link>
        )
    }

}