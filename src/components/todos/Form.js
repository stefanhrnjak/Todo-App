import React from "react";

import classes from "./Form.module.css";
import TodoItem from "./TodoItem";
import Fadable from "./Fadable";

export default function Form(props) {
  return (
    <div className={classes.addTodo}>
      <div className={classes.background}>
        <h2>What's up?</h2>
      </div>

      <form onSubmit={props.onSubmitHandler}>
        <input id="todo-input" type="text" ref={props.reference}></input>
        <button className={classes.btn} type="submit">
          Add Todo
        </button>
      </form>

      <section>
        <ul>
          {props.list.map((todo) => (
            <Fadable key={todo.id} timeout={300} onFinishFadeout={() => props.onRemoveItem(todo.id)}>
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
