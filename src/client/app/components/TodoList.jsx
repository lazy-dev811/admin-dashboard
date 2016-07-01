import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        name: 'learn react',
        order: 1,
        done: false,
      },{
        name: 'learn redux',
        order: 2,
        done: false,
      },{
        name: 'complete todos app',
        order: 3,
        done: false,
      }],
      todoOptions: ['don', 'rem', 'ren'],
    };
  };

  selectTodo(todo) {
    const todos = this.state.todos.map(x => {
      if (x === todo) {
        x.done = !x.done;
      }
      return x;
    });
    this.setState({
      todos: todos,
    })
  }

  addTodo() {
    const inputValue = document.querySelector('.input-field').value;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: inputValue,
          order: this.state.todos.length + 1,
          done: false
        }
      ],
    })
  }

  render() {
    return (
      <div className="todo-app">
        <header className="header">
          TODO APP WIP
        </header>

        <ul className="todos">
          {this.state.todos.map((todo, index) => (
            <li className="todos__todo" draggable="true" onClick={() => this.selectTodo(todo)}>
              <ul className="todos__todo__options">
                {this.state.todoOptions.map((todoOption) => (
                  <li className="todos__todo__options__option">
                    {todoOption}
                  </li>
                ))}
              </ul>

              {todo.name} ({`${todo.done}`})
            </li>
          ))}
        </ul>
        <footer className="footer">
          <input type="text" className="input-field"></input>
          <button type="submit" onClick={() => this.addTodo()} className="btn">
            Add
          </button>
          <button className="btn">
            Remove selected
          </button>
        </footer>
      </div>
    )
  };
};

export default TodoList;
