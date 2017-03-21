export const UPDATE_WIDGET_CONFIG = 'UPDATE_WIDGET_CONFIG';

export const updateWidgetConfig = (widgetIdentifier, widgetConfig) => ({
  type: UPDATE_WIDGET_CONFIG,
  widgetIdentifier,
  widgetConfig,
});
