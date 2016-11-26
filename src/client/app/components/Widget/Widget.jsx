import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { updateWidgetConfig } from './redux/actions';
import reduxForm from './parts/DisplaySettings.jsx';

import './Widget.scss';

const component2 = (Component) => {
  // TODO: Figure out htf to access the displaySettings form values from within this file
  // TODO: mergeProps was causing the child component's mergeProps to not work or something - all of them were undefiend
  // TODO: I need to be able to access the displaySettings form values from within mapDispatchToProps

  // const mapStateToProps = ({ config, form: { DisplaySettings } }) => {
  //   console.log('DisplaySettings', DisplaySettings);
  //   return ({ ...config, ...DisplaySettings });
  // };
  // const mergeProps = ({ widgetBlog }) => ({ config: widgetBlog });
  const mapDispatchToProps = (dispatch) => ({
    onSettingsChange() {
      // console.log('test', registeredFields);
      // console.log('LOLOLO', this);
      // const newValue = { value };
      // const updatedSetting = Object.assign(setting, newValue);
      // dispatch(updateWidgetConfig(widget, updatedSetting));
    },
    onSettingsSubmit(formFields) {
      console.log('SUBMITTED', formFields);
    },
  });

  class WidgetComponent extends React.Component {
    render() {
      console.log('RENDER IN WIDGET', this.props.config.components);
      const {
        widgetName,
        onSettingsChange,
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
                  onSettingsChange={onSettingsChange}
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
    onSettingsChange: PropTypes.func,
    onSettingsSubmit: PropTypes.func,
    config: PropTypes.object.isRequired,
  };

  return connect(null, mapDispatchToProps, null)(WidgetComponent);
};

export default component2;
