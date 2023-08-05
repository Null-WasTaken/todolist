import React from "react";
import {AiOutlinePlus ,} from "react-icons/ai";
import {LiaTimesSolid} from "react-icons/lia";

export  default function Todo() {
    const [Todo , SetTodo] = React.useState([]);
    const [Input , SetInput] = React.useState("");

    const  AddTodo = (todo) => {
        SetTodo([...Todo, {
            id: Math.random(),
            task: todo,
            complete: false,
            isEditing: false
        }])
    }

    const DeleteTodo = (id) => {
        SetTodo(Todo.filter((todo) => todo.id !== id))
    }

    const Handle = (e) => {
        e.preventDefault();

        AddTodo(Input);

        SetInput("")
    }

    return (
          <form onSubmit={Handle}>
          <div className={"todos-add"}>
          <input type="text" placeholder={"Enter Your Task"} value={Input} onChange={(e) =>  SetInput(e.target.value)}/>
          <div>
              <AiOutlinePlus size={20} />
          </div>
          </div>
          <div className={"todos-lists"}>
                  {
                      Todo.map((todo , index) => (
                          <ul key={index}>
                          <li>{todo.task}</li>
                              <div onClick={() => DeleteTodo(todo.id)}>
                                  <LiaTimesSolid size={20} />
                              </div>
                          </ul>
                      ))
                  }
          </div>
          </form>
    );


}