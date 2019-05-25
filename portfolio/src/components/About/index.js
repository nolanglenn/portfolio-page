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
            </div>
        </div>
    )
}

export default About;