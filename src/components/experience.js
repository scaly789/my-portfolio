import React, { Component } from 'react'
import VerticalTabs from './tabs'

export default class Experience extends Component {
    render () {
        return (
            <div id='experience'>
                <div className='section-header'>Experience</div>
                <div className='section-content'>
                    <VerticalTabs></VerticalTabs>
                </div>
            </div>
        )
    }
}