import React, {Component} from 'react';
import './FullPage.css'

export default class FullPage extends Component {
    render(){
        const { children } = this.props;
        return (
         <div className={`fullpage ${this.props.className || ''}`}>
             {children}
         </div>
        )
    }
}