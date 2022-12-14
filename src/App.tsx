import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Todoform from "./Components/Todoform";
import TodoList from "./Components/TodoList";

function App() {
   
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
    }
  };
  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="App">
      <Todoform addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
