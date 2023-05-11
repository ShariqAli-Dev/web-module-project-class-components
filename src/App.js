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
  // need to be able to toggle completed
  // need to be able to clear completed on every item and restart

  toggleCompleted = (taskId) => {
    const updatedTodoData = this.state.todoData.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });

    this.setState({
      ...this.state,
      todoData: updatedTodoData,
    });
  };

  addItem = (newItem) => {
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

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todoData: this.state.todoData.filter((task) => !task.completed),
    });
  };

  render() {
    return (
      <>
        <h1>Todo List: MVP</h1>
        <TodoList toggleCompleted={this.toggleCompleted} todoData={this.state.todoData} />
        <TodoForm clearCompleted={this.clearCompleted} addItem={this.addItem} />
      </>
    );
  }
}

export default App;
