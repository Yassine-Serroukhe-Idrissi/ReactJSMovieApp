import {Link } from "react-router-dom";
import React from "react";

export default function Layout(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/popular">Popular</Link>
                </li>
            </ul>
        </nav>
    )
}