import React, { Component } from "react";
import "./Todo.css";
class Todo extends Component {
  render() {
    return (
      <>
        <p className={this.props.todoItem.completed ? "todo-item completed" : "todo-item"}>{this.props.todoItem.task}</p>
      </>
    );
  }
}

export default Todo;
