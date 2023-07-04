import React, { Component } from 'react'

export default class Title extends Component {
    render () {
        return (
            <div className='header' id='home2'>
                <div className='name'>Nice to meet you... I'm <span className='highlight'>Eric</span>.</div>
                {/*<div className='sub-name'>I like to code?</div>*/}
                <div className='sub-name'>
                    <span id='intro-1'>I</span>
                    <span> </span>
                    <span id='intro-2'>l</span>
                    <span id='intro-3'>i</span>
                    <span id='intro-4'>k</span>
                    <span id='intro-5'>e</span>
                    <span> </span>
                    <span id='intro-6'>t</span>
                    <span id='intro-7'>o</span>
                    <span> </span>
                    <span id='intro-8'>c</span>
                    <span id='intro-9'>o</span>
                    <span id='intro-10'>d</span>
                    <span id='intro-11'>e</span>
                    <span id='intro-12'>?</span>
                </div>
            </div>
        )
    }
}