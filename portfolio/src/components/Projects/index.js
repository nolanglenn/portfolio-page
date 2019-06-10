import React from 'react';
import Cards from '../Cards/index.js'
import './style.css';

function Projects() {
    return (
        <div>
            <div className='row'>
                <div className='col-sm-12'>
                    <h1 className='my-work'>My work 👇</h1>
                </div>
            </div>
            <Cards />
        </div>
    )
}

export default Projects;