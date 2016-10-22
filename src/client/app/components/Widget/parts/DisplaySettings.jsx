import React, { PropTypes } from 'react';

const DisplaySettings = ({
  onSettingsUpdate,
  widgetName,
  header,
  body,
  footer,
  transparentBg,
  transparentScrollbar,
}) => {
  const transparencyConfigs = [
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

  return (
    <div className="widget__settings">
      <div className="widget__settings__toggle">
        <div className="widget__settings__toggle__middle" />
      </div>
      <ul className="widget__settings__list">
        {
          transparencyConfigs.map(setting => (
            <li
              className="widget__settings__list__item"
              key={setting.label}
              onClick={() => onSettingsUpdate(widgetName, setting)}
            >
              {setting.label}
            </li>
          ))
        }
      </ul>

      <ul className="widget__settings__list">
        {
          componentConfigs.map(setting => (
            <li
              className="widget__settings__list__item"
              key={setting.label}
              onClick={() => onSettingsUpdate(widgetName, setting)}
            >
              {setting.label}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

DisplaySettings.propTypes = {
  onSettingsUpdate: PropTypes.func,
  widgetName: PropTypes.string,
  header: PropTypes.bool,
  body: PropTypes.bool,
  footer: PropTypes.bool,
  transparentBg: PropTypes.bool,
  transparentScrollbar: PropTypes.bool,
};

export default DisplaySettings;
