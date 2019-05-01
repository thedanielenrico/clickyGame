import React from "react";

const Navbar = () => {
    return <>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active col">
                            <a className="nav-link" href="/">Clicky Game</a>
                        </li>
                        <li className="nav-item col">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item col">
                            Score: <span>0</span> | Top Score: <span>0</span>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    </>

}

export default Navbar;