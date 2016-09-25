import React from 'react';
import TodoList from '../components/TodoList/TodoList.jsx';

class TodoListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        name: 'learn react',
        order: 1,
        selected: false,
        done: false,
      },{
        name: 'learn redux',
        order: 2,
        selected: false,
        done: false,
      },{
        name: 'complete todos app',
        order: 3,
        selected: false,
        done: false,
      },{
        name: 'gym',
        order: 4,
        selected: false,
        done: false,
      },{
        name: 'youve got this',
        order: 5,
        selected: false,
        done: false,
      },{
        name: 'youre doing well',
        order: 6,
        selected: false,
        done: false,
      }],
    }
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }

}

export default TodoListContainer;
