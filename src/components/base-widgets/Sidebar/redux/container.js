import { connect } from 'react-redux';

import Sidebar from '../Sidebar.jsx';

const mapStateToProps = ({ widgetSidebar }) => ({ ...widgetSidebar });

const mergeProps = ({ loggedIn, sidebarItems }) => ({
  loggedIn,
  sidebarItems,
});

export default connect(mapStateToProps, null, mergeProps)(Sidebar);
