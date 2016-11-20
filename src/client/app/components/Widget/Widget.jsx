import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { updateWidgetConfig } from './redux/actions';
import reduxForm from './parts/DisplaySettings.jsx';

import './Widget.scss';

const component2 = (Component) => {
  const mapDispatchToProps = dispatch => ({
    onChange(widget, setting, value) {
      // console.log('LOLOLO', widget, setting, value);
      const newValue = { value };
      const updatedSetting = Object.assign(setting, newValue);
      dispatch(updateWidgetConfig(widget, updatedSetting));
    },
    onSubmit(formFields) {
      console.log('SUBMITTED', formFields);
    },
  });

  class WidgetComponent extends React.Component {
    render() {
      console.log('RENDER IN WIDGET', this.props.config.components);
      const {
        widgetName,
        onChange,
        onSubmit,
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
          {widgetName}
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

      const widgetStyle = {
        top,
        right,
        bottom,
        left,
      };

      const widgetBodyStyle = {
        width,
        height,
      };

      return (
        <div className="widget" style={widgetStyle}>
          <div className={containerClass} style={widgetBodyStyle}>

            {
              displaySettings &&
                <reduxForm.form
                  widgetName={widgetName}
                  onChange={onChange}
                  onSubmit={onSubmit}
                  top={top}
                  right={right}
                  bottom={bottom}
                  left={left}
                  header={header}
                  body={body}
                  footer={footer}
                  transparentBg={transparentBg}
                  transparentScrollbar={transparentScrollbar}
                />
            }

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
  }

  WidgetComponent.propTypes = {
    widgetName: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    config: PropTypes.object.isRequired,
  };

  return connect(null, mapDispatchToProps)(WidgetComponent);
};

export default component2;
