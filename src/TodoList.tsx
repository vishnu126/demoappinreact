import React from "react";
import { TodoListItem } from "./TodoListItem";

type Todo = {
  text: string;
  complete: boolean;
};

type ToggleComplete = (selectedTodo: Todo) => void;

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete
}) => {
  return (
    <div>
      <h3>{"Total todos remaining : " + todos.filter(todo => {
        return todo.complete == false
      }).length + " out of " + todos.length}</h3>
      <ul>
        {todos.map(todo => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>

  );
};
