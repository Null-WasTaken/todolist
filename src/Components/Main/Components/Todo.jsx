import React from "react";
import {AiOutlinePlus ,} from "react-icons/ai";
import {LiaTimesSolid} from "react-icons/lia";

export  default function Todo() {
    const [Todo , SetTodo] = React.useState([]);
    const [Input , SetInput] = React.useState("");

    const AddTodo = (items) => {
        const NewTodo = {
            id: Math.random(),
            todo: items
        }

        SetTodo([...Todo , NewTodo]);

        SetInput("");
    };

    return (
      <>
          <div className={"todos-add"}>
          <input type="text" value={Input} onChange={(eve) => SetInput(eve.target.value)}/>
          <div onClick={Input === "" ? console.log("damn") : () => AddTodo(Input) }>
              <AiOutlinePlus size={20} />
          </div>
          </div>
          <div className={"todos-lists"}>
              {
                  Todo.map((todo) => (
                      <li key={Todo.id}>
                          {todo.todo}
                          <LiaTimesSolid size={20}/>
                      </li>
                  ))
              }
          </div>
      </>
    );


}