import React from "react";

const AddTask = ({ newTask, handleSubmit, setNewTask }) => {
  return (
    <form action="#" className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="newItem">Add to the Todo list</label>
      <input
        type="text"
        id="newItem"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddTask;
