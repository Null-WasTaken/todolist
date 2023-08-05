import React from 'react'
import "./assets/content.scss";
import profile from "./assets/Profile.jpg";
import Todo from "./Components/Todo.jsx";

function GetDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}

export default function MainContent() {

    const [CurrentDate , SetCurrentDate] = React.useState(GetDate())

    return (
        <div className={"todo"}>
            <div className={"todo-header"}>
                <h2>Today <span>{CurrentDate}</span></h2>
                <img src={profile} alt="profile"/>
            </div>

            <div className={"todos"}>

                <Todo />

            </div>
        </div>
    );
}