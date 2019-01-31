import React, {Component} from 'react';
import './SkillsCard.css'


export default class SkillCard extends Component {
    render(){
        const { item } = this.props;
        return (
            <div className="card">
                <img className="card-image" src={item.contents.image}/>
                <div className="card-title">
                    <h3>
                        {item.contents.title}
                    </h3>
                </div>
            </div>

        )
    }
}