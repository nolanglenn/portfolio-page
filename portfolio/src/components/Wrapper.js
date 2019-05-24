import React from 'react';

export default function Wrapper(props) {
    return (
        <div cassName='container'>{props.children}</div>
    )
}