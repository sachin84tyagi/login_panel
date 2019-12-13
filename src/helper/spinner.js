import React, { Component } from 'react';

const Spinner = (props) => {
    return (
        <div className={`spinner-border ${props.colorClass}`} >
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default Spinner;