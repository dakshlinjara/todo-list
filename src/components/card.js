import React, { useState, useEffect } from "react";
import "./card.css";
import TodoItem from "./todoitem";
import supabase from "../supabaseClient";

function Card() {
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [task, setTask] = useState("");

  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      let { data, error } = await supabase.from("tasks").select("*").eq("user_id", user.id);
      if (error) console.error("Error fetching tasks:", error);
      else setTasks(data);
    };

    fetchTasks();
  }, []);

  // Add a new task to the database
  const addTask = async () => {
    if (!task.trim()) return;

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert("Please log in to add tasks.");
      return;
    }

    const { data, error } = await supabase.from("tasks").insert([
      { user_id: user.id, content: task }
    ]).select();

    if (error) {
      console.error("Error adding task:", error.message);
    } else {
      setTasks([...tasks, data[0]]); // Update UI with new task
      setTask("");
      setShowInput(false);
    }
  };

  // Delete a task from the database
  const deleteTask = async (taskId) => {
    const { error } = await supabase.from("tasks").delete().eq("id", taskId);
    if (error) {
      console.error("Error deleting task:", error.message);
    } else {
      setTasks(tasks.filter((t) => t.id !== taskId)); // Remove task from UI
    }
  };

  return (
    <div>
      <div className="card">
        <ul className="todo-list">
          {tasks.map((t) => (
            <TodoItem key={t.id} id={t.id} text={t.content} onDelete={deleteTask} />
          ))}
        </ul>

        {/* Add Task Button */}
        <button className="half-button" onClick={() => setShowInput(!showInput)}>
          {showInput ? "Close" : "Add Task"}
        </button>

        {/* Input Field */}
        {showInput && (
          <div className="task-input-container">
            <input
              type="text"
              placeholder="Enter task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="task-input"
            />
            <button className="add-task-button" onClick={addTask}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
