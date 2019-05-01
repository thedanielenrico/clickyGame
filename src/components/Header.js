import React from "react";
import Navbar from "./Navbar"

const Header = () => {
return <>
<header className="text-center">
    <Navbar/>
    <h3 className="">Clicky Game</h3>
    <h6 className="">Click on a image to add points, but don't click it again or you will lose points!</h6>
</header>
</>
}

export default Header;