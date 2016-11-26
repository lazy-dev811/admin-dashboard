import { connect } from 'react-redux';

import widgetHOC from '../../Widget/Widget.jsx';
import Sidebar from '../Sidebar.jsx';

const mapStateToProps = ({ widgetSidebar, config }) => ({ ...widgetSidebar, ...config });

const mergeProps = ({ loggedIn, sidebarItems, widgetSidebar }, { dispatch }) => ({
  loggedIn,
  sidebarItems,
  config: widgetSidebar,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Sidebar));
