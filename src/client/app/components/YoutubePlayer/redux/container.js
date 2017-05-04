import { connect } from 'react-redux';
import { youtubeSearchRequested } from './actions';

import YoutubePlayer from '../YoutubePlayer.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetYoutubePlayer, config }) => ({ ...widgetYoutubePlayer, ...config });

const mergeProps = ({ videos, activeVideo, widgetYoutubePlayer, asyncStatus }, { dispatch }) => ({
  videos,
  activeVideo,
  asyncStatus,
  config: widgetYoutubePlayer,
  onChange(searchQuery) {
    dispatch(youtubeSearchRequested(searchQuery));
  },
  thisWorks() {
    dispatch(youtubeSearchRequested('blah'));
  },
  onSubmit(formValues) {
    dispatch(youtubeSearchRequested(formValues));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(YoutubePlayer));
