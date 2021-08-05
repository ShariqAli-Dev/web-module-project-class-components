import React from "react";
// import todolist data
// import components

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: todoData,
    };
  }

  addItem = (newItem) => {
    console.log("I am adding a new item", newItem);

    this.setState({
      ...this.state,
      todoData: [
        ...this.state.todoData,
        {
          task: newItem,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  render() {
    return (
      <>
        <h1>Todo List: MVP</h1>
        <TodoList todoData={this.state.todoData} />
        <TodoForm addItem={this.addItem} />
      </>
    );
  }
}

export default App;
