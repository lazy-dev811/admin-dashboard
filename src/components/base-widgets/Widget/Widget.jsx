import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { updateWidgetConfig } from './redux/actions';
import form from './parts/SettingsForm.jsx';

import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

import './Widget.scss';

const component2 = (Component) => {
  const mapStateToProps = ({ config }) => ({ ...config });
  const mapDispatchToProps = dispatch => ({
    handleChange(name, setting) {
      dispatch(updateWidgetConfig(name, setting));
    },
  });

  class WidgetComponent extends React.Component {
    render() {
      // console.log('WIDGET', this.props.widgetIdentifier, this.props);

      const {
        widgetIdentifier,
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
        asyncStatus,
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
          {widgetIdentifier}
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

      const TodoForm = form('todo');
      const GreetForm = form('greet');

      const widgetProps = {
        widgetIdentifier,
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
                  {widgetIdentifier === 'widgetTodo' &&
                    <TodoForm
                      {...widgetProps}
                    />
                  }
                  {widgetIdentifier === 'widgetGreet' &&
                    <GreetForm
                      {...widgetProps}
                    />
                  }
                </div>
            }

            <div className={wrapClass}>
              <div className={contentClass}>

                {header && <Header />}
                {asyncStatus && asyncStatus.inProgress && <Loader showOverlay={body} />}
                {asyncStatus && asyncStatus.error && <ErrorMessage />}

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
    widgetIdentifier: PropTypes.string,
    handleChange: PropTypes.func,
    onSettingsSubmit: PropTypes.func,
    config: PropTypes.object.isRequired,
    asyncStatus: PropTypes.object,
  };

  return connect(mapStateToProps, mapDispatchToProps, null)(WidgetComponent);
};

export default component2;
