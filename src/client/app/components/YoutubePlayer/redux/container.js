import { connect } from 'react-redux';
import { youtubeSearchRequested } from './actions';

import YoutubePlayer from '../YoutubePlayer.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetYoutubePlayer, config }) => ({ ...widgetYoutubePlayer, ...config });

const mergeProps = ({ videos, activeVideo, widgetYoutubePlayer }, { dispatch }) => ({
  videos,
  activeVideo,
  config: widgetYoutubePlayer,
  onChange(searchQuery) {
    console.log('change in container 2', searchQuery);
    dispatch(youtubeSearchRequested(searchQuery));
  },
  thisWorks() {
    console.log('actually workin', 'blah');
    dispatch(youtubeSearchRequested('blah'));
  },
  onSubmit(formValues) {
    console.log('submit in container');
    dispatch(youtubeSearchRequested(formValues));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(YoutubePlayer));
