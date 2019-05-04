import React from "react";
import "../App.css";

const Navbar = (props) => {
    return <>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light row">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active col">
                            <a className="nav-link" href="/">Clicky Game</a>
                        </li>
                        <li className="nav-item col">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item col">
                            Score: <span>{props.score}</span> | Top Score: <span>{props.highScore}</span>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    </>

}

export default Navbar;