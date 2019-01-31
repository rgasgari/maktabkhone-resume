import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import FullPage from '../components/FullPage';
import Arrow from '../components/Arrow';
import {Element} from 'react-scroll'

import data from '../data.json';

import './TitleSection.css'

export default class TitleSection extends Component {
    render(){
        return (
            <div>
                <FullPage>
                    <h1 className="title" style={{
                        fontSize: "3em"
                    }}>
                        {data.title}
                    </h1>
                    <h3 className="subtitle">
                        {data.subtitle}
                    </h3>
                    <div className="icons-wrapper">
                        {
                            Object.keys(data.links).map(key => {
                                return (
                                    <div className="icon">
                                        <SocialIcon url={data.links[key]}
                                        />
                                    </div>)
                            })
                        }
                    </div>
                </FullPage>
                <Arrow icon={data.icons.arrow_down} to="about"/>
                <Element name="about" className="element"></Element>
            </div>
        )
    }
}