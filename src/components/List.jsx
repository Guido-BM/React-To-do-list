import React, { useState } from "react";
import { Checkbox, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const List = ({ todos, handleDelete }) => {
  const [checkedTasks, setCheckedTasks] = useState([]);
  const handleCheck = (index) => {
    const newCheckedTasks = [...checkedTasks];
    newCheckedTasks[index] = !newCheckedTasks[index];
    setCheckedTasks(newCheckedTasks);
  };
  return (
    <ul id="ToDoListContainer">
      {todos.map((todo, index) => (
        <li key={index}>
          <Checkbox
            className="custom-checkbox"
            onChange={() => handleCheck(index)}
          >
            <span className={checkedTasks[index] ? "strikethrough" : ""}>
              {todo.text}
            </span>
          </Checkbox>
          <Button
            size="small"
            type="0"
            danger
            onClick={() => handleDelete(index)}
          >
            <DeleteOutlined />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default List;
