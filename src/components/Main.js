import React, { useState } from "react";
import ListDisplay from "./ListDisplay";

const Main = () => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask("");

    setList([...list, { task: task, category: category }]);
  };

  //   console.log(list);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="task"
          onChange={handleChange}
          value={task}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option defaultValue disabled selected>
            Category
          </option>
          <option value="Chores">Chores</option>
          <option value="Errands">Errands</option>
          <option value="Work">Work</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <ListDisplay list={list} setList={setList} />
    </div>
  );
};

export default Main;
