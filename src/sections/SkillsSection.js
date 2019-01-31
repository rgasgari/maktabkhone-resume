import React, {Component} from 'react';

import FullPage from '../components/FullPage'
import SkillCard from '../components/SkillCard';
import Arrow from '../components/Arrow'

import data from '../data.json';

import './SkillsSection.css';

export default class SkillsSection extends Component {
    render(){
        return (
            <div>
                <FullPage>
                    <h1 style={{
                        fontSize: "3em"
                    }}>
                        {data.sections[1].title}
                    </h1>
                    <div className="card-wrapper">
                        {
                            data.sections[1].items.map(item => {
                                return (
                                <SkillCard item={item}/>
                            )})
                        }

                    </div>
                </FullPage>
                <Arrow icon={data.icons.arrow_up} to="title"/>

            </div>
        )
    }
}