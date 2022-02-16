import React from 'react';
import './Header.css';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/220px-Netflix-new-icon.png"/>
            </div>
            <div className="header--user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWGKNk39rCbUMmHEV3uqusN3WZ4LjYZbhrZfNGJ-85ilFgp095yz1AC5Rg7XRsLXE1eQ&usqp=CAU"/>
            </div>
        </header>
    )
}