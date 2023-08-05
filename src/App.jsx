import React from "react";
import Navbar from "./Components/NavBar/Navbar.jsx";
import MainContent from "./Components/Main/MainContent.jsx";


export default function App() {



    return (
        <div className={"container"}>
            <Navbar/>
            <MainContent />
        </div>
    );
}