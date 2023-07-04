import React, { Component } from 'react'

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: 'Motion Lab',
            description: 'In this project, I created an XR game that utilized the leap motion sensor to track the movement of the hands so that the user could interact with objects in the 3D virtual space. The purpose of this game was to aid in in the accessibility of high school science experiments by minimizing costs and danger. The client for this project was the PittBio Outreach program located in Pitsburgh.',
            link: 'https://github.com/ama28/MotionLab'
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
        console.log(event.target.id);
        console.log(event)
        if (event.target.id == 'item-1') {
            this.setState({title: 'Motion Lab', description: 'Created an XR game that utilized the leap motion sensor to track the movement of the hands so that the user could interact with objects in the 3D virtual space. The purpose of this game was to aid in in the accessibility of high school science experiments by minimizing costs and danger. The client for this project was the PittBio Outreach program located in Pitsburgh.', link: 'https://github.com/ama28/MotionLab'})
        } else if (event.target.id == 'item-2') {
            this.setState({title: 'Question-Answering Program', description: 'Applied core NLP concepts like dependency parsing and POS tagging to question-answer generation. Utilized spacy library and language parsing for question generation, and the Facebook Infersent vector model and BERT language representation model for answer generation.', link: 'https://github.com/scaly-professional/question-answering'})
        } else if (event.target.id == 'item-3') {
            this.setState({title: 'Motion Tracking for Robot Applications', description: 'Utilized OpenCV to track key points of a person’s hand through motions, as well as other objects. Kept track of the motions so a that robot arm could recognize these motions and replicate them.', link: 'https://github.com/scaly789/humanoids'})
        } else if (event.target.id == 'item-4') {
            this.setState({title: 'Smart Maker Video Reflection Booth', description: 'Developed and refined the program for the Smart Maker Reflection Booth as part of the NSF-funded Smart Making Spaces Project. Programmed a customer-friendly interface for the Smart Maker Reflection Booth. This interface focused on walking the customer through an extensive self-reflection process. Improved communication skills through constant meetings with the clients.', link: 'https://github.com/scaly-professional/probotron'})
        } else if (event.target.id == 'item-5') {
            this.setState({title: 'Heatmap Visualization of Temperatures', description: 'Programmed a frontend page that took in temperature data from a csv file and visualized the important information for every month over the course of a decade. Each month was visualzied as a matrix cell with a color representing the max and min temperatures for that month, as well as a line graph that demonstrated the temperature trends throughout the months.', link: 'https://github.com/scaly789/temp_heatmap'})
        } else if (event.target.id == 'item-6') {
            this.setState({title: 'Old Personal Website', description: 'Developed another kind of portfolio website where I played around with a more creative approach. The user is able to control a small character throughout the website to see different parts of my portfolio.', link: 'https://github.com/scaly789/personal-website'})
        }
    }

    render () {
        return (
            <div id='projects'>
                <div className='section-header'>Projects</div>
                <div className='section-content container' onChange={this.onChangeValue}>
                    <input type="radio" name="slider" id="item-1" defaultChecked/>
                    <input type="radio" name="slider" id="item-2"/>
                    <input type="radio" name="slider" id="item-3"/>
                    <input type="radio" name="slider" id="item-4"/>
                    <input type="radio" name="slider" id="item-5"/>
                    <input type="radio" name="slider" id="item-6"/>
                    <div class="cards">
                        <label class="card" for="item-1" id="song-1">
                        <img className="carousel-img" src="motionlab.png" alt="song"/>
                        </label>
                        <label class="card" for="item-2" id="song-2">
                        <img className="carousel-img" src="qna.jpg" alt="song"/>
                        </label>
                        <label class="card" for="item-3" id="song-3">
                        <img className="carousel-img" src="humanoids.png" alt="song"/>
                        </label>
                        <label class="card" for="item-4" id="song-4">
                        <img className="carousel-img" src="smart.png" alt="song"/>
                        </label>
                        <label class="card" for="item-5" id="song-5">
                        <img className="carousel-img" src="heatmap.png" alt="song"/>
                        </label>
                        <label class="card" for="item-6" id="song-6">
                        <img className="carousel-img" src="website.png" alt="song"/>
                        </label>
                    </div>
                    <div class="player">
                        <div class="carousel-title">{this.state.title}</div>
                        <div class="carousel-content">{this.state.description}</div>
                        <a href={this.state.link}><img className="git" src="github.png"/></a>
                    </div>
                </div>
            </div>
        )
    }
}
