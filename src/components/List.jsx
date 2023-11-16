import React from "react";
import { Checkbox, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const List = ({ todos, setTodos }) => {
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const handleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].isStrikethrough = !newTodos[index].isStrikethrough;
    setTodos(newTodos);
  };

  return (
    <ul id="ToDoListContainer">
      {todos.map((todo, index) => (
        <li key={index}>
          <Checkbox
            className="custom-checkbox"
            onChange={() => handleCheck(index)}
            checked={todo.isStrikethrough}
          >
            <span className={todo.isStrikethrough ? "strikethrough" : ""}>
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
