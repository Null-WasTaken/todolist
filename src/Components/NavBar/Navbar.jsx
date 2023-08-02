import React from "react";
import {AiOutlineMenu, AiFillHome} from "react-icons/ai";
import "./assets/nav.scss"

export default function Navbar() {

    const [nav , SetNav] = React.useState(true)

    return (
        <>
      <div className={"nav"}>
          <div className={"nav-ls"}>
              <div className={"icon"} onClick={ () => {
                  SetNav(!nav);
              }}>
                   <AiOutlineMenu size={20} />
              </div>

              <div className={"icon"}>
              <AiFillHome size={20} />
              </div>
          </div>
      </div>

      <div className={nav ? "sidebar" : "hidden"}>
          <div className={"items"}>
              <ul className={!nav ? "none" : ""}>
                  <li>Home</li>
                  <li>Add</li>
                  <li>Upcoming</li>
              </ul>
          </div>
      </div>

        </>
    );
}