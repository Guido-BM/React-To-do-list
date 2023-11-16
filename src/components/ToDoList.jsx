import React, { useState } from "react";

import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
import InputAndSave from "./InputAndSave";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="ToDoListWrapper">
      <Header />

      <InputAndSave newTodo={(newTodo) => setTodos([...todos, newTodo])} />
      <List
        todos={todos}
        handleDelete={(index) =>
          setTodos(todos.filter((todo, i) => i !== index))
        }
      />
      <Footer />
    </div>
  );
};

export default ToDoList;
