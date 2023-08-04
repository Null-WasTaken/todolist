import React from 'react'
import "./assets/content.scss";
import profile from "./assets/Profile.jpg";

export default function MainContent() {
    return (
        <div className={"todo"}>
            <div className={"todo-header"}>
                <h3>Inbox</h3>
                <img src={profile} alt="profile"/>
            </div>

            <div className={"todos"}>

            </div>
        </div>
    );
}