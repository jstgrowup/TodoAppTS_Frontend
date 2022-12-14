import React from "react";
interface TodoListItemProps {
  todo: Todo;
  toggleCompleted: ToggleComplete;
}
function TodoListItem({ todo, toggleCompleted }: TodoListItemProps) {
  return (
    <div>
     
      <ul>
        
        <label
          htmlFor=""
          className={todo.completed ? "todo-row complete" : "todo"}
        ></label>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <input type="checkbox" onChange={() => toggleCompleted(todo)} />
        <p>{todo.text}</p>
      </ul>
    </div>
  );
}

export default TodoListItem;
