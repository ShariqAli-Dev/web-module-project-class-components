import React, { Component } from "react";
import "./Todo.css";
class Todo extends Component {
  render() {
    return (
      <div onClick={() => this.props.toggleCompleted(this.props.todoItem.id)}>
        <p className={this.props.todoItem.completed ? "todo-item completed" : "todo-item"}>{this.props.todoItem.task}</p>
      </div>
    );
  }
}

export default Todo;
