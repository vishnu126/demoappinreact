import React from "react";
import "./TodoApp.css";

type Todo = {
  text: string;
  complete: boolean;
};

type ToggleComplete = (selectedTodo: Todo) => void;

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete
}) => {
  return (
    <li className={todo.complete ? "complete" : ""} onClick={() => toggleComplete(todo)} > {todo.text}  </li>
  );
};
