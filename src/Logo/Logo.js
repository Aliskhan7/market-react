import React from 'react';
import logo from "./full-word.svg";

function Logo(props) {
    return (
        <div className='logo'>
            <img src={logo}/>
        </div>
    );
}

export default Logo;