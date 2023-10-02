"use client";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoslice";

const page = () => {
  const [todo, setTodo] = useState("");
  const todoData = useSelector((data) => data.todoData.todo);
  console.log("todoData", todoData);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Add List</h3>
      <input
        type="text"
        placeholder="add new task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => dispatch(addTodos(todo))}>Add todo</button>
      <h4>To do List</h4>
      {todoData.length &&
        todoData.map((data) => (
          <span key={data.id}>
            {data.name}
            <br />
          </span>
        ))}
    </div>
  );
};

export default page;
