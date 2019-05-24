import React from 'react';
import profilePic from '../../profilepic.jpg'
import './style.css';

function About(props) {
    return (
        <div className='circular-portrait'>
            <img src={profilePic} className='img-circle' alt='Nolan Glenn'></img>        
        </div>
    )
}

export default About;