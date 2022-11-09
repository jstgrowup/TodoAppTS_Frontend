import React from "react";
import TodoListItem from "./TodoListItem";
interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}
function TodoList({ todos, toggleComplete }: TodoListProps) {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.text}
              todo={todo}
              toggleCompleted={toggleComplete}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
