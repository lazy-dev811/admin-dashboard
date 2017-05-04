import { connect } from 'react-redux';

import { onTabChange } from './actions';

import Bookmarks from '../Bookmarks.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetBookmarks, config }) => ({ ...widgetBookmarks, ...config });

const mergeProps = ({ widgetIdentifier, categories, widgetBookmarks, asyncStatus }, { dispatch }) => ({
  widgetIdentifier,
  categories,
  onTabChange: label => dispatch(onTabChange(label)),
  asyncStatus,
  config: widgetBookmarks,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Bookmarks));
