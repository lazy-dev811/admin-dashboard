import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormFieldCheckbox from '../../FormElements/FormFieldCheckbox/FormFieldCheckbox.jsx';
import FormFieldNumber from '../../FormElements/FormFieldNumber/FormFieldNumber.jsx';

require('./DisplaySettings.scss');

const DisplaySettings = ({
  handleChange,
  onSettingsSubmit,
  widgetName,
  top,
  right,
  bottom,
  left,
  header,
  body,
  footer,
  transparentBg,
  transparentScrollbar,
}) => {
  const positionConfigs = [
    {
      label: 'Top',
      key: 'top',
      category: 'position',
      value: top,
    },
    {
      label: 'Right',
      key: 'right',
      category: 'position',
      value: right,
    },
    {
      label: 'Bottom',
      key: 'bottom',
      category: 'position',
      value: bottom,
    },
    {
      label: 'Left',
      key: 'left',
      category: 'position',
      value: left,
    },
  ];
  const transparencyConfigs = [
    {
      label: 'Background',
      key: 'transparentBg',
      value: transparentBg,
    },
    {
      label: 'Scrollbar',
      key: 'transparentScrollbar',
      value: transparentScrollbar,
    },
  ];
  const componentConfigs = [
    {
      label: 'Header',
      key: 'header',
      category: 'components',
      value: header,
    },
    {
      label: 'Body',
      key: 'body',
      category: 'components',
      value: body,
    },
    {
      label: 'Footer',
      key: 'footer',
      category: 'components',
      value: footer,
    },
  ];

  const test = (name, setting, event, type) => {
    const updatedSetting = Object.assign(setting, {});
    if (type !== 'bool') {
      const typeConverter = type === 'text' ? String : Number;
      updatedSetting.value = typeConverter(event.target.value);
    } else {
      updatedSetting.value = event.target.value === 'true';
    }
    return handleChange(name, updatedSetting);
  };

  return (
    <div className="widget__settings">
      <div className="widget__settings__toggle">
        <div className="widget__settings__toggle__middle" />
      </div>

      <form className="widget__settings__form" onSubmit={() => onSettingsSubmit}>
        <div className="widget__settings__category">
          <div className="widget__settings__category__content">
            <div className="widget__settings__category__title">Position</div>
            {
              positionConfigs.map(setting => {

                console.log('setting.value', setting.value);
                return (
                  <div className="widget__settings__category__item" key={setting.label}>
                    <Field
                      value={setting.value}
                      name={setting.label}
                      component={FormFieldNumber}
                      placeholder={setting.label}
                      id={setting.label}
                      label={setting.label}
                      onChange={event => test(widgetName, setting, event, 'number')}
                    />
                  </div>
                );
              })
            }
          </div>
        </div>

        <div className="widget__settings__category">
          <div className="widget__settings__category__content">
            <div className="widget__settings__category__title">Transparency</div>
            {
              transparencyConfigs.map(setting => (
                <div className="widget__settings__category__item" key={setting.label}>
                  <Field
                    name={setting.label}
                    component={FormFieldCheckbox}
                    id={setting.label}
                    label={setting.label}
                    type="checkbox"
                    onChange={event => test(widgetName, setting, event, 'bool')}
                  />
                </div>
              ))
            }
          </div>
        </div>

        <div className="widget__settings__category">
          <div className="widget__settings__category__content">
            <div className="widget__settings__category__title">Components</div>
            {
              componentConfigs.map(setting => (
                <div className="widget__settings__category__item" key={setting.label}>
                  <Field
                    name={setting.label}
                    component={FormFieldCheckbox}
                    id={setting.label}
                    label={setting.label}
                    type="checkbox"
                    onChange={event => test(widgetName, setting, event, 'bool')}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </form>
    </div>
  );
};

DisplaySettings.propTypes = {
  handleChange: PropTypes.func,
  onSettingsSubmit: PropTypes.func,
  widgetName: PropTypes.string,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  header: PropTypes.bool,
  body: PropTypes.bool,
  footer: PropTypes.bool,
  transparentBg: PropTypes.bool,
  transparentScrollbar: PropTypes.bool,
};

export default {
  form: reduxForm({
    form: 'DisplaySettings',
  })(DisplaySettings),
};
