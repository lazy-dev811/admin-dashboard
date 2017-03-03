import { connect } from 'react-redux';

import Bookmarks from '../Bookmarks.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetBookmarks, config }) => ({ ...widgetBookmarks, ...config });

const mergeProps = ({ widgetName, bookmarkCategories, widgetBookmarks }, { dispatch }) => ({
  widgetName,
  bookmarkCategories: bookmarkCategories.filter(category => category.active),
  config: widgetBookmarks,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Bookmarks));
