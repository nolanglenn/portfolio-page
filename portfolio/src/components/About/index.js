import React from 'react';
import profilePic from '../../profilepic.jpg'
import './style.css';

function About(props) {
    return (
        <div className='row'>
            <div className='col-sm-12'>
                <div className='circular-portrait'>
                    <img src={profilePic} className='img-circle' alt='Nolan Glenn'></img>        
                </div>
                <h1 className='left'>Hello, my name is <span className='name'>Nolan Glenn</span>.</h1>
                <h1 className='left'>I'm a full-stack web developer.</h1>
                <a href="https://github.com/nolanglenn" style={{marginRight: '10px'}} target='_blank'><img src={require('./GitHub-Mark-Light-32px.png')}></img></a>
                <a href="https://www.linkedin.com/in/nolan-glenn-38494ba4/" target='_blank'><img src={require('./linkedin-3-32.png')}></img></a>
            </div>
        </div>
    )
}

export default About;