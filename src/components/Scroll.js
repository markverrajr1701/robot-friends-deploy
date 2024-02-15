import React from 'react';
import './Scroll.css';

const Scroll = ({ children }) => {
    return <div className="scrollBar">{ children }</div>;
};

export default Scroll;