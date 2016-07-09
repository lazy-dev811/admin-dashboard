import React from 'react';
import classNames from 'classnames';

class TodoList extends React.Component {
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
      }],
      filterDone: false,
    };
  };

  selectTodo(todo) {
    const todos = this.state.todos.map(x => {
      if (x === todo) {
        x.selected = !x.selected;
      }
      return x;
    });
    this.setState({
      todos,
    })
  }

  setTodoDone(todo) {
    const todos = this.state.todos.map(x => {
      if (x === todo) {
        x.done = !x.done;
      }
      return x;
    });
    this.setState({
      todos,
    })
  }

  addTodo() {
    const inputValue = document.querySelector('.input-field').value;
    if (!inputValue) return;

    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: inputValue,
          order: this.state.todos.length + 1,
          selected: false,
          done: false,
        }
      ],
    })
  }

  removeTodos() {
    this.setState({
      todos: this.state.todos.filter((x) => !x.selected),
    })
  }

  sortTodos() {

  }

  filterSelected() {
    const toggle = this.state.filterDone;
    let todos;
    console.log(toggle)
    if (toggle) {
      todos = this.state.todos.filter((x) => !x.done)
    } else {
      todos = this.state.todos.filter((x) => x.done)
    }
    this.setState({
      // todos,
      filterDone: !this.state.filterDone,
    })
  }

  render() {
    return (
      <div className="todo-app">
        <header className="header">
          TODO APP WIP
        </header>

        <ul className="filters">
          <li className="filters__filter" onClick={() => this.sortTodos()}>
            Name
          </li>
          <li className="filters__filter" onClick={() => this.filterSelected()}>
            DONE
          </li>
        </ul>

        <ul className="todos">
          {this.state.todos.map((todo, index) => {
            const baseClass = classNames('todos__todo', {
              'is-selected': todo.selected,
              'is-done': todo.done,
              'is-hidden': this.state.filterDone && todo.done,
            })
            return (
              <li className={baseClass} key={index} draggable="true" onClick={() => this.selectTodo(todo)}>
                <ul className="todos__todo__options">
                  <li className="todos__todo__options__option" onClick={() => this.setTodoDone(todo)}>
                    Done
                  </li>
                  <li className="todos__todo__options__option" onClick={() => this.removeTodo(todo)}>
                    Remove
                  </li>
                </ul>

                {todo.name} {todo.selected && 'SELECTED'} {todo.done && 'DONE'}
              </li>
            )
          })}
        </ul>
        <footer className="footer">
          <input type="text" className="input-field"></input>
          <button type="submit" onClick={() => this.addTodo()} className="btn">
            Add
          </button>
          <button type="submit" onClick={() => this.removeTodos()} className="btn">
            Remove selected
          </button>
        </footer>
      </div>
    )
  };
};

export default TodoList;
