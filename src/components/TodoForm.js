import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
    };
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      newTask: e.target.value,
    });
  };

  onSubmit = (e) => {
    //submit
    e.preventDefault();
    this.props.addItem(this.state.newTask);
    this.setState({
      ...this.state,
      newTask: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="item" placeholder="...todo" value={this.state.newTask} onChange={this.onChange} />
          <button type="submit"> Add Todo</button>
          <button onClick={() => this.props.clearCompleted()}>Clear Completed</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
