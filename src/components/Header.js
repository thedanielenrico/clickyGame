import React from "react";
import "./header.css";

const Header = (props) => {
    return <>
        <nav>
            <div>
                <ul>
                    <li >
                       Game of Thrones Clicky Game
                    </li>
                    <li>
                        <span>{props.message}</span>
                    </li>
                    <li >
                        Score: <span>{props.score}</span> | Top Score: <span>{props.highScore}</span>
                    </li>
                </ul>
            </div>
        </nav>
        <header className="text-center" >
            <h3 className="">Clicky Game</h3>
            <h6 className="">Click on a image to add points, but don't click it again or you will lose points!</h6>
        </header>

    </>
}

export default Header;