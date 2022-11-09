type AddTodo = (newTodo: string) => void;

type Todo = {
  text: string;
  completed: boolean;
};
type ToggleComplete = (selectedTodo: Todo) => void;
