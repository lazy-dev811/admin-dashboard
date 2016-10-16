import React from 'react';
import classnames from 'classnames';

import './Widget.scss';

export default Component => class extends React.Component {
  render() {
    const { config } = this.props;

    const widgetClass = classnames('widget', {
      'widget--has-bg': config && config.background,
    });

    const bodyClass = classnames({
      widget__body: config && config.header,
    });

    const widgetSyle = config && { right: config.posX, bottom: config.posY };

    return (
      <div className={widgetClass} style={widgetSyle}>

        {config && config.header &&
          <header className="widget__header">
            Header text
          </header>
        }

        <div className={bodyClass}>
          <Component {...this.state} {...this.props} />
        </div>

      </div>
    );
  }
};
