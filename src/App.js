import React, { useState, useRef, useEffect } from "react";

import Card from "./components/UI/Card";
import Main from "./components/todos/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Form from "./components/todos/Form";
import About from "./components/todos/About";

function App() {
  const input = useRef();
  const [todoList, setTodoList] = useState([]);
  const [render, setRender] = useState(<div>hello</div>);

  // Adds item to todoList
  function submitHandler(event) {
    event.preventDefault();
    const enteredTodo = input.current.value.trim();

    if (enteredTodo.length === 0) return;
    setTodoList((prevList) => {
      return [
        ...prevList,
        {
          text: enteredTodo,
          date: Date(),
          id: Math.random().toString(), // MUST be .toString() for key={} to work
        },
      ];
    });
    input.current.value = "";
  }

  useEffect(() => {
    setRender(
      <Form onSubmitHandler={submitHandler} reference={input} list={todoList} onRemoveItem={removeItem}/>
    );
  }, [todoList]);

  function removeItem(idValue) {
    setTodoList(todoList.filter((todo) => todo.id !== idValue))
  }

  function renderAddTodo() {
    setRender(
      <Form onSubmitHandler={submitHandler} reference={input} list={todoList} onRemoveItem={removeItem}/>
    );
  }

  function renderAbout() {
    setRender(<About />);
  }

  return (
    <Card>
      <Sidebar onRenderAddTodo={renderAddTodo} onRenderAbout={renderAbout} />
      <Main onRender={render} />
    </Card>
  );
}

export default App;