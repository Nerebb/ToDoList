import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn JS", status: 0 },
    { id: 2, title: "Code a Todo List", status: 0 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  return (
    <div className="container">
      <Header title={"Todo list"} subTitle={"Get one item done at a time."} />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setShowIncomplete={setShowIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
      />
      <AddTask
        newTask={newTask}
        handleSubmit={handleSubmit}
        setNewTask={setNewTask}
      />
    </div>
  );
}

export default App;
