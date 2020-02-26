import React, { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import GlobalStyle from "./GlobalStyle";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "AAA", checked: true },
    { id: 2, text: "BBB", checked: true },
    { id: 3, text: "CCC", checked: false },
  ]);
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
};

export default App;
