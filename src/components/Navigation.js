import React, {Component} from 'react';
import {Element} from 'react-scroll';

import data from '../data.json'

import './Navigation.css'
import Scroll from "./Scroll";

export default class Navigation extends Component {

    render(){
        return (
            <div>
                <ul className="navigation">
                    {
                        data.nav_items.links.map( (item) => {
                            return (
                              <li className="nav-link">
                                  <Scroll to={item.to}>
                                      <a>{item.title}</a>
                                  </Scroll>
                              </li>
                            )}
                        )
                    }
                    {
                        <li className="change-theme" onClick={this.props.changeTheme}>
                            <img src={data.nav_items.change_theme.icon}/>
                        </li>
                    }
                </ul>
                <Element name="title" className="element"></Element>
            </div>
        );
    }
}