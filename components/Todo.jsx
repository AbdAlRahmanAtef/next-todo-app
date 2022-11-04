import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import { TodoContext } from "../context/TodoContext";

export const Todo = ({ todo: { title, id, completed } }) => {
  const { handleComplete, removeTodo, handleInputValue } =
    useContext(TodoContext);
  return (
    <div className={`todo ${completed && "done"}`}>
      <p>{title}</p>
      <div>
        {" "}
        <div
          className="check"
          onClick={() => {
            handleComplete(id);
          }}
        >
          <GoCheck size={20} className={`${completed && "done"}`} />
        </div>
        <BsPencilSquare
          title="Edit Todo"
          size={20}
          onClick={() => {
            handleInputValue(id);
          }}
        />
        <FaRegTrashAlt
          title="Remove Todo"
          size={20}
          onClick={() => removeTodo(id)}
        />
      </div>
    </div>
  );
};
