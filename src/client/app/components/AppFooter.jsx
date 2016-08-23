import React, { PropTypes } from 'react';

const AppFooter = ({ apps, appTodoShow }) => (
  <footer className = "footer">
    <ul>
      {apps.map(app => (
        <li className="footer__link" onClick={() => appTodoShow()}>
          {app}
        </li>
      ))}
    </ul>
  </footer>
)

AppFooter.propTypes = {
  apps: PropTypes.array,
}

export default AppFooter;
