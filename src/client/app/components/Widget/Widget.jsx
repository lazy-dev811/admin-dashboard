import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './Widget.scss';

export default Component => class extends React.Component {
  render() {
    const {
      config: {
        components: { header, body, footer },
        dimensions: { width, height },
        position: { top, right, bottom, left },
        transparentBg,
        transparentScrollbar,
      },
    } = this.props;

    const Header = () => (
      <div className="widget__header">
        Header text
      </div>
    );

    const Footer = () => (
      <div className="widget__footer">
        Footer text
      </div>
    );

    const containerClass = classnames({
      'has-transparent-scrollbars': transparentBg || transparentScrollbar,
    });

    const wrapClass = classnames({
      'has-set-height': height,
    });

    const contentClass = classnames({
      widget__content: body,
      'has-transparent-bg': transparentBg,
      'has-scroll': height,
    });

    const widgetSyle = {
      top,
      right,
      bottom,
      left,
    };

    const widgetBodySyle = {
      width,
      height,
    };

    return (
      <div className="widget" style={widgetSyle}>
        <div className={containerClass} style={widgetBodySyle}>
          <div className={wrapClass}>
            <div className={contentClass}>

              {header && <Header />}

              <Component {...this.state} {...this.props} />

              {footer && <Footer />}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
