import React from 'react';
import tasktraderimg from './tasktrader.PNG'
import './style.css';

function Cards() {
    return (
        <div className='row'>
            <div className='col-sm-12'>
                <div className='card mx-auto' style={{width: '18rem'}}>
                <img class="card-img-top" src={require('./tasktrader.PNG')} alt="Card image cap"></img>
                    <div className='card-body'>
                        <h5 className='card-title'>Task Trader</h5>
                        <h6 className='card-subtitle mb-2 text-muted'>MERN app</h6>
                        <p className='card-text text-left'>Task Trader is an app that allows realtors and brokers to work together by posting and accepting jobs. This was built with a team of three other people.</p>
                        <a href='https://github.com/nolanglenn/project3' target='_blank' className='card-link'>Source code</a>
                        <a href='https://task-trader.herokuapp.com/' target='_blank' className='card-link'>Check it out ></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;