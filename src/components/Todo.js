import React, { Component } from "react";
class Todo extends Component {
  constructor() {
    super(
      (this.state = {
        //random state
      })
    );
  }

  render() {
    return (
      <>
        <p>I am a test paragraph in the todo comopnent</p>
      </>
    );
  }
}

export default Todo;
