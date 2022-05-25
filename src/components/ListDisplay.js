import React, { useState } from "react";
import Item from "./Item";

const ListDisplay = (props) => {
  const { list, setList } = props;
  const [selected, setSelected] = useState("");

  const listMapped = list
    .filter((item) => {
      if (selected) return item.category === selected;
      return item;
    })
    .map((item, index) => {
      return (
        <Item
          key={index}
          item={item}
          index={index}
          setList={setList}
          list={list}
        />
      );
    });

  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option defaultValue selected></option>
        <option value="Chores">Chores</option>
        <option value="Errands">Errands</option>
        <option value="Work">Work</option>
      </select>
      {listMapped}
    </div>
  );
};

export default ListDisplay;
