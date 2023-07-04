import React, { Component } from 'react'

export default class About extends Component {
    render () {
        return (
            <div id='about'>
                <div className='about-wrapper'>
                    <div className='about-left'>
                        <div className='section-header'>About Me</div>
                        <div className='section-content'>
                            <div>
                                I recently graduated from <span className='highlight'>Carnegie Mellon University</span>, double majoring in <span className='highlight'>Computer Science and Human-Computer
                                Interaction</span>. Currently, I am a Software Development Engineer at <span className='highlight'>Amazon</span> as a part of the
                                Amazon SCOT (Supply Chain Optimization Technology) team.
                            </div>
                            <div className='technologies'>
                                <div>
                                    Some tools and technologies that I use are:
                                </div>
                                <ul className='about-list'>
                                    <li><span>Python</span></li>
                                    <li><span>Java</span></li>
                                    <li><span>Scala</span></li>
                                    <li><span>React</span></li>
                                    <li><span>SQL</span></li>
                                    <li><span>C</span></li>
                                    <li><span>Amazon S3</span></li>
                                    <li><span>DynamoDB</span></li>
                                    <li><span>Amazon SQS</span></li>
                                </ul>
                                <div>In my free time, I like to work out, hang out with my hypothetical cat, and work on personal projects
                                    where I can learn how to use new and interesting technologies.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-right'>
                        <img className='pfp' src="pfp.jpg" alt="Eric Gan"></img>
                    </div>
                </div>
            </div>
        )
    }
}