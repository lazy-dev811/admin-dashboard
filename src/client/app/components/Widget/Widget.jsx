import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { updateWidgetConfig } from './redux/actions';
import TestFormBlog from './parts/BlogForm.jsx';
import TestFormGreet from './parts/GreetForm.jsx';

import './Widget.scss';

const component2 = (Component) => {
  const mapStateToProps = ({ config }) => {
    return ({ ...config });
  };
  const mapDispatchToProps = (dispatch) => {
    return ({
      handleChange(name, setting) {
        dispatch(updateWidgetConfig(name, setting));
      },
    });
  };

  class WidgetComponent extends React.Component {
    render() {
      // console.log('this', this.props.widgetName, this.props);
      const {
        widgetName,
        handleChange,
        onSettingsSubmit,
        config: {
          components: { header, body, footer },
          dimensions: { width, height },
          position: { top, right, bottom, left },
          transparentBg,
          transparentScrollbar,
          displaySettings,
        },
      } = this.props;

      const initialValues = {
        header,
        body,
        footer,
        width,
        height,
        top,
        right,
        bottom,
        left,
        transparentBg,
        transparentScrollbar,
        displaySettings,
      };

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

      const widgetProps = {
        widgetName,
        handleChange,
        onSettingsSubmit,
        top,
        right,
        bottom,
        left,
        header,
        body,
        footer,
        transparentBg,
        transparentScrollbar,
        initialValues,
      };
      return (
        <div className="widget" style={widgetStyle}>
          <div className={containerClass} style={widgetBodyStyle}>

            {
              displaySettings &&
                <div>
                  {widgetName === 'widgetBlog' &&
                    <TestFormBlog.form
                      {...widgetProps}
                    />
                  }
                  {widgetName === 'widgetGreet' &&
                    <TestFormGreet.form
                      {...widgetProps}
                    />
                  }
                </div>
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
    handleChange: PropTypes.func,
    onSettingsSubmit: PropTypes.func,
    config: PropTypes.object.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps, null)(WidgetComponent);
};

export default component2;
