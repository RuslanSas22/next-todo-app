export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 border-b"
        >
          <span>{todo.title}</span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
