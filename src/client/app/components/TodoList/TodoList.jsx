import React from 'react';
import Todo from './Todo.jsx';

require('./TodoList.scss');

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
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
    const inputValue = this.refs.todoField.value;
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
    });
    this.refs.todoField.value = '';
  }

  removeTodos() {
    this.setState({
      todos: this.state.todos.filter((x) => !x.selected),
    })
  }

  sortTodos() {

  }

  filterDone() {
    const toggle = this.state.filterDone;
    let todos;
    if (toggle) {
      todos = this.state.todos.filter((x) => !x.done)
    } else {
      todos = this.state.todos.filter((x) => x.done)
    }
    this.setState({
      filterDone: !this.state.filterDone,
    })
  }

  render() {
    return (
      <div>
        <div className="todo-app">
          <header className="todo__header">
            <svg className="icon todo__header__burger"><use xlinkHref="app/assets/icons/burger.svg"></use></svg>
            <svg className="icon todo__header__close" onClick={() => this.appTodoClose()}><use xlinkHref="app/assets/icons/close.svg#svg-sync"></use></svg>
          </header>

          <ul className="filters">
            <li className="filters__filter" onClick={() => this.sortTodos()}>
              Name
            </li>
            <li className="filters__filter" onClick={() => this.filterDone()}>
              DONE
            </li>
          </ul>

          <ul className="todos">
            {this.state.todos.map((todo, index) => (
              <Todo
                todo={todo}
                key={index}
                selectTodo={() => this.selectTodo(todo)}
                setTodoDone={() => this.setTodoDone(todo)}
                removeTodo={() => this.removeTodo(todo)}
                filterDone={this.state.filterDone}
              />
            ))}
          </ul>
          <footer className="todo__footer">
            <input type="text" className="input-field" placeholder="Enter goal name" ref="todoField"></input>
            <svg className="icon todo__footer__btn btn__icon is-disabled" onClick={() => this.addTodo()}><use xlinkHref="app/assets/icons/add.svg#svg-sync"></use></svg>
            <svg className="icon todo__footer__btn btn__icon" onClick={() => this.removeTodos()}><use xlinkHref="app/assets/icons/delete.svg#svg-sync"></use></svg>
          </footer>
        </div>
      </div>
    )
  };
};

export default TodoList;
