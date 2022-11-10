import React, { ChangeEvent, useState, FormEvent } from "react";
interface TodoformProps {
  addTodo: AddTodo;
}






function Todoform({ addTodo }: TodoformProps) {
  const [newTodo, setnewTodo] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setnewTodo(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    console.log("hello tSx");
    
    setnewTodo("");
  };
  return (
    <form action="">
      <input
        type="text"
        value={newTodo}
        className={"todo-input"}
        placeholder={"Add new Todo"}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit" className="todo-button">
        add a todo
      </button>
    </form>
  );
}

export default Todoform;
