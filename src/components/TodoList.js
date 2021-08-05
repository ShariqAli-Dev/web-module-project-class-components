// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <>
        {this.props.todoData.map((item) => {
          return (
            <>
              <Todo key={item.id} todoItem={item} />
            </>
          );
        })}

        <p>I am a test paragraph for TodoList component</p>
      </>
    );
  }
}

export default TodoList;
