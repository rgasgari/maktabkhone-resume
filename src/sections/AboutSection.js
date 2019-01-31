import React, {Component} from 'react';
import FullPage from '../components/FullPage';
import Arrow from '../components/Arrow';
import {Element} from 'react-scroll'

import data from '../data.json';

import './AboutSection.css';

export default class AboutSection extends Component {
    render(){
        return (
            <div>
                <FullPage>
                    <h1 style={{
                        fontSize: "3em"
                    }}>
                        {data.sections[0].title}
                    </h1>
                    <p className="paragraph">
                        {data.sections[0].items[0].contents}
                    </p>
                </FullPage>
                <Arrow icon={data.icons.arrow_down} to="skills"/>
                <Element name="skills" className="element"></Element>
            </div>
        )
    }
}