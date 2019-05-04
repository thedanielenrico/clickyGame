import React from "react";
import "./header.css";

const Header = (props) => {
    return <>
        <nav>
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
        <header></header>

    </>
}

export default Header;