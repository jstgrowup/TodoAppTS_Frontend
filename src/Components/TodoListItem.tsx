import React from "react";
interface TodoListItemProps {
  todo: Todo;
  toggleCompleted: ToggleComplete;
}
function TodoListItem({ todo, toggleCompleted }: TodoListItemProps) {
  return (
    <div>
      <ul>
        <ul>
          <label
            htmlFor=""
            className={todo.completed ? "todo-row complete" : "todo"}
          ></label>
          <input type="checkbox" onChange={() => toggleCompleted(todo)} />
          <p>{todo.text}</p>
        </ul>
      </ul>
    </div>
  );
}

export default TodoListItem;
