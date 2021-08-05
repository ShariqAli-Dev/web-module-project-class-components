import React, { Component } from "react";

class TodoForm extends Component {
  onSubmit = () => {
    //submit
  };

  render() {
    return (
      <>
        <form>
          <input />
          <button type="submit"> Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
