import React, { useState, useRef, useEffect } from "react";

import Card from "./components/UI/Card";
import Main from "./components/todos/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Form from "./components/todos/Form";
import About from "./components/todos/About.module";

function App() {
  const input = useRef();
  const [todoList, setTodoList] = useState([]);
  const [render, setRender] = useState(<div>hello</div>);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [id, setId] = useState('form')

  // Adds item to todoList
  function submitHandler(event) {
    event.preventDefault();
    setId('form');
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

  function returnForm() {
    return (
      <Form
        onSubmitHandler={submitHandler}
        reference={input}
        list={todoList}
        onRemoveItem={removeItem}
        rotate={rotate}
        onHideSidebar={hideSidebarHandler}
      />
    );
  }

  function returnAbout() {
    return (<About rotate={rotate} onHideSidebar={hideSidebarHandler} />)
  }

  useEffect(() => {
    if (id === 'form') {renderAddTodo();} else {renderAbout()}
    
  }, [todoList, rotate]);

  function removeItem(idValue) {
    setId('form');
    setTodoList(todoList.filter((todo) => todo.id !== idValue));
  }

  function renderAddTodo() {
    setRender(returnForm());
  }

  function renderAbout() {
    setRender(returnAbout());
  }

  function hideSidebarHandler(page) {
    setId(page);
    setRotate((current) => !current);
    setHideSidebar((current) => !current);
  }

  return (
    <Card>
      <Sidebar
        onRenderAddTodo={renderAddTodo}
        onRenderAbout={renderAbout}
        hideSidebar={hideSidebar}
      />
      <Main onRender={render} />
    </Card>
  );
}

export default App;
