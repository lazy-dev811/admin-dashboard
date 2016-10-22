export const UPDATE_WIDGET_CONFIG = 'UPDATE_WIDGET_CONFIG';

export const updateWidgetConfig = (widgetName, widgetConfig) => ({
  type: UPDATE_WIDGET_CONFIG,
  widgetName,
  widgetConfig,
});
