import React, { PropTypes } from 'react';

import AppHeader from './AppHeader.jsx';
import AppFooter from './AppFooter.jsx';

const AppLayout = ({ children }) => {
  const apps = ['Todo', 'Form'];

  let showTodo = false;
  const appTodoShow = () => {
    console.log(showTodo)
    showTodo = !showTodo;
    return showTodo;
  };

  return (
    <div>
      <AppHeader />

      <div className="app-content">
        {children}
      </div>

      <AppFooter apps={apps} appTodoShow={() => appTodoShow()} />
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.any,
}

export default AppLayout;
