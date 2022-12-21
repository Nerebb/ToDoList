import React from "react";

const TaskItem = ({ item, setTaskStatus, removeTask }) => {
  return (
    <li key={item.id} className={item.status ? "done" : ""}>
      <span className="label">{item.title}</span>
      <div className="actions">
        <input
          type="checkbox"
          className="btn-action btn-action-done"
          checked={Boolean(item.status)}
          onChange={(e) => setTaskStatus(item.id, e.target.checked)}
        />
        <button
          className="btn-action btn-action-delete"
          onClick={() => removeTask(item.id)}
        >
          &#9587;
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
