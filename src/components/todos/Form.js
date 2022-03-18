import React from "react";

import classes from "./Form.module.css";
import TodoItem from "./TodoItem";
import Fadable from "./Fadable";
import HideBtn from "../UI/HideBtn";

export default function Form(props) {

  function onHideSidebarHandler() {
    props.onHideSidebar('form')
  }

  return (
    <div className={classes.addTodo}>
      <div className={classes.background}>
        <HideBtn
          onClick={onHideSidebarHandler}
          rotate={props.rotate}
        ></HideBtn>

        <h2>What's up?</h2>
      </div>

      <form onSubmit={props.onSubmitHandler}>
        <input
          placeholder="Go for a run..."
          id="todo-input"
          type="text"
          ref={props.reference}
        ></input>
        <button className={classes.formBtn} type="submit">
          Add +
        </button>
      </form>

      <section>
        <ul>
          {props.list.map((todo) => (
            <Fadable
              key={todo.id}
              timeout={300}
              onFinishFadeout={() => props.onRemoveItem(todo.id)}
            >
              {(prop) => (
                <TodoItem
                  item={todo}
                  onRemoveItem={() => prop.onStartFadeout()}
                />
              )}
            </Fadable>
          ))}
        </ul>
      </section>
    </div>
  );
}
