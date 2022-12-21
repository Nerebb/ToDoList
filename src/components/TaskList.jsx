import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  showIncomplete,
  setShowIncomplete,
  setTaskStatus,
  removeTask,
}) => {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((item) => (
            <TaskItem
              key={item.id}
              item={item}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incomplete task
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncomplete}
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
    </>
  );
};

export default TaskList;
