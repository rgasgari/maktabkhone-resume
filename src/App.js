import React, { Component } from 'react';

import TitleSection from './sections/TitleSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import Navigation from './components/Navigation'
import SnowStorm from 'react-snowstorm'

import './App.css';

import data from './data';

class App extends Component {

    constructor(){
        super();
        this.state = {
            currentTheme: 0,
        }
        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme(){
        this.setState({
            currentTheme: this.state.currentTheme < 2 ? this.state.currentTheme+1 : 0
        });
    }

    render() {
        return (
            <div style={{
                backgroundColor: data.themes[this.state.currentTheme].background_color,
                color: data.themes[this.state.currentTheme].color
            }}>
                <SnowStorm
                    snowColor={data.themes[this.state.currentTheme].color}
                    // followMouse="false"
                />
                <Navigation changeTheme={this.changeTheme}/>
                <TitleSection/>
                <AboutSection/>
                <SkillsSection/>
            </div>
        );
    }
}

export default App;
