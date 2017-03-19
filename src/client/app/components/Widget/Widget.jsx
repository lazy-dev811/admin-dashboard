import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { updateWidgetConfig } from './redux/actions';
import reduxForm from './parts/DisplaySettings.jsx';

import './Widget.scss';

const component2 = (Component) => {
  const mapStateToProps = ({ config, form: { DisplaySettings } }) => {
    return ({ ...config, ...DisplaySettings });
  };
  const mapDispatchToProps = (dispatch) => {
    return ({
      handleChange(widgetName, widgetSetting) {
        dispatch(updateWidgetConfig(widgetName, widgetSetting));
      },
      // onSettingsSubmit(formFields) {
        // console.log('SUBMITTED', formFields);
      // },
    });
  };

  class WidgetComponent extends React.Component {
    render() {
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

      return (
        <div className="widget" style={widgetStyle}>
          <div className={containerClass} style={widgetBodyStyle}>

            {
              displaySettings &&
                <reduxForm.form
                  widgetName={widgetName}
                  handleChange={handleChange}
                  onSettingsSubmit={onSettingsSubmit}
                  top={top}
                  right={right}
                  bottom={bottom}
                  left={left}
                  header={header}
                  body={body}
                  footer={footer}
                  transparentBg={transparentBg}
                  transparentScrollbar={transparentScrollbar}
                  initialValues={initialValues}
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
    handleChange: PropTypes.func,
    onSettingsSubmit: PropTypes.func,
    config: PropTypes.object.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps, null)(WidgetComponent);
};

export default component2;
