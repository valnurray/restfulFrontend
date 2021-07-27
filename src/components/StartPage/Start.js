import React from "react";
import classes from './Start.module.css';
import {NavLink} from "react-router-dom";

const Start = () => {
    return (
        <div>
            
            <div className={classes.item}>
                <NavLink to="/articles" activeClassName={classes.active} >Articles</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/authors" activeClassName={classes.active} >Authors</NavLink>
            </div>

        </div>

    );
}

export default Start;