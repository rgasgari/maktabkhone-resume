import React, {Component} from 'react';
// import {Link} from 'react-scroll';
import Scroll from '../components/Scroll';

import './Arrow.css';

export default class Arrow extends Component {

    render(){
        return (
            <Scroll to={this.props.to}>
                <div onClick={this.props.onClick} className="arrow bounce">
                    <div>
                        <img src={this.props.icon}/>
                    </div>
                </div>
            </Scroll>

        )
    }
}