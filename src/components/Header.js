import React from "react";
import "./header.css";

const Header = (props) => {
    return <>
        <nav className="fixed-top">
            <div>
                <ul>
                    <li className="h4">
                        Game of Thrones Clicky Game
                             </li>
                    <li className="h4">
                        <span>{props.message}</span>
                    </li>
                    <li className="h4">
                        Score: <span>{props.score}</span> | Top Score: <span>{props.highScore}</span>
                    </li>
                </ul>
            </div>
        </nav>
        <header>
            <p>
                Click an image once to add a point, click the same image and lose.
                    </p>
        </header>
    </>
}

export default Header;