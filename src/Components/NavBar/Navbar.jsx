import React from "react";
import {AiOutlineMenu, AiFillHome , AiOutlineClose} from "react-icons/ai";
import "./assets/nav.scss"

export default function Navbar() {

    const [nav , setNav] = React.useState(true);

    function HandleNav() {
        setNav(!nav);
        console.log(nav)
    }

    return (
      <div className={"nav"}>
          <div className={"nav-ls"}>
              <div className={"icon"} onClick={HandleNav}>
                  {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} /> }
              </div>

              <div className={"icon"}>
              <AiFillHome size={20} />
              </div>
              <input type="search" />
          </div>
      </div>
    );
}