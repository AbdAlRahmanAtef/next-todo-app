import Image from "next/image";
import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { Todo } from "../components/Todo";
import { TodoContext } from "../context/TodoContext";
import empty from "../assets/empty.png";

export default function Home() {
  const {
    todos,
    todoscount,
    addTodo,
    inputValue,
    inputRef,
    mood,
    setMood,
    updateTodo,
    theId,
    setInputValue,
  } = useContext(TodoContext);

  if (typeof window !== "undefined") {
    window.onkeyup = (e) => {
      if (e.key === "Enter") {
        if (inputValue !== "") {
          if (mood === "add") {
            addTodo({
              id: new Date().getTime().toString(),
              title: inputValue,
              completed: false,
            });
          } else {
            updateTodo(theId, inputValue);
          }
          inputRef.current.value = "";
          setInputValue("");
          inputRef.current.focus();
          setMood("add");
        }
      }
    };
  }

  return (
    <div className={`app`}>
      <div className="title">
        <h1>Todo App</h1>
        <div className="form">
          <div className="inputs">
            <input
              type="text"
              placeholder="Add Task"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              ref={inputRef}
            />
            <button
              onClick={() => {
                if (inputValue !== "") {
                  if (mood === "add") {
                    addTodo({
                      id: new Date().getTime().toString(),
                      title: inputValue,
                      completed: false,
                    });
                  } else {
                    updateTodo(theId, inputValue);
                  }
                }
                inputRef.current.value = "";
                setInputValue("");
                inputRef.current.focus();
                setMood("add");
              }}
            >
              <IoMdAdd size={30} />
            </button>
          </div>
        </div>
      </div>
      <div className="todos-container">
        {todos.length > 0 ? (
          todos?.map((todo) => <Todo todo={todo} key={todo.id} />)
        ) : (
          <div className="empty">
            <Image src={empty} alt="" />
            <p>Empty List</p>
          </div>
        )}
      </div>
      <div className="count">
        Todos: {todos.length} && completed: {todoscount}
      </div>
    </div>
  );
}
