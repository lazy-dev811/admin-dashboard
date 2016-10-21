import { connect } from 'react-redux';
import React from 'react';
import classnames from 'classnames';
import configureStore from '../../store/configureStore.js';
import { updateWidgetConfig } from './redux/actions';

import './Widget.scss';

const Component2 = (Component, someText) => class extends React.Component {

  render() {
    const { dispatch, subscribe } = configureStore();
    const { config } = this.props;
    // console.log('BOOM', someText, config.transparentBg, config.transparentScrollbar);
    // console.log(this);

    const {
      config: {
        components: { header, body, footer },
        dimensions: { width, height },
        position: { top, right, bottom, left },
        transparentBg,
        transparentScrollbar,
        displaySettings,
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

    const DisplaySettings = () => {
      const visibleSettings = [
        {
          label: 'Transparent background',
          key: 'transparentBg',
          value: transparentBg,
        },
        {
          label: 'Transparent scrollbar',
          key: 'transparentScrollbar',
          value: transparentScrollbar,
        },
      ];

      const updateSetting = (setting) => {
        subscribe();
        console.log(setting);
        // dispatch(updateWidgetConfig(setting));
      };

      return (
        <div className="widget__settings">
          <div className="widget__settings__toggle">
            <div className="widget__settings__toggle__middle" />
          </div>
          <ul className="widget__settings__list">
            {visibleSettings.map(setting => (
              <li className="widget__settings__list__item" key={setting.label} onClick={() => updateSetting(setting)}>
                {setting.label}
              </li>
            ))}
          </ul>
        </div>
      );
    };

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

          {displaySettings && <DisplaySettings />}

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

export default Component2;
