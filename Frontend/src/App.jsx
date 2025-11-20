import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");


  const getTodos = async () => {
    const res = await axios.get("http://localhost:4000/api/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);


  const addTodo = async () => {
    if (!text.trim())
      return;
    await axios.post("http://localhost:4000/api/todos", { text });
    setText("");
    getTodos();
  };


  const toggleTodo = async (id, completed) => {
    await axios.put(`http://localhost:4000/api/todos/${id}`, { completed });
    getTodos();
  };


  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:4000/api/todos/${id}`);
    getTodos();
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4"> TODO APP </h1>

      <div className="flex gap-2">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Add todo..."
          value={text}
          onChange={(e) => setText(e.target.value)} />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
          Add
        </button>
      </div>

      <ul className="mt-5 space-y-3">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded">
            <span
              onClick={() => toggleTodo(todo._id, !todo.completed)}
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo._id)}
              className="text-red-600 font-bold cursor-pointer">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
