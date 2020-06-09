type Todo = {
  text: string;
  complete: boolean;
};

type AddTodo = (newTodo: string) => void; export const initialTodos: Array<Todo> = [
  {
    text: "this is first todo and need to complete in 2 hrs",
    complete: true
  },
  {
    text: "Rest chill out",
    complete: false
  }
];
