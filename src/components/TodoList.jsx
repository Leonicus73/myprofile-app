import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to add a task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Function to toggle task completion
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md text-left">
      <h3 className="text-xl font-bold text-gray-700 text-center">📝 To-Do List</h3>
      <div className="flex mt-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full p-2 border text-black rounded-lg"
          placeholder="Add a task..."
        />
        <button
          onClick={addTask}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
        >
          Add
        </button>
      </div>
      {/* Task List */}
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="p-2 bg-white shadow-md rounded-lg flex justify-between items-center">
            <label className="flex items-center text-black space-x-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="cursor-pointer"
              />
              <span className={task.completed ? "line-through text-gray-500" : ""}>
                {task.text}
              </span>
            </label>
            <button
              onClick={() => deleteTask(task.id)}
              className="p-1 bg-red-500 text-white rounded-md"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;