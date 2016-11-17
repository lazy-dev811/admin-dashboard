import _ from 'lodash';
import React, { PropTypes } from 'react';

import reduxForm from './parts/SearchBar.jsx';
import VideoList from './parts/VideoList.jsx';
import VideoDetail from './parts/VideoDetail.jsx';

const YoutubePlayer = ({ videos, activeVideo, onChange, onSubmit }) => {
  const delayedSearchQuery = _.debounce((searchQuery) => { onChange(searchQuery); }, 300);

  return (
    <div>
      <reduxForm.searchBar onChange={delayedSearchQuery} onSubmit={onSubmit} />
      <VideoDetail video={activeVideo} />
      <VideoList videos={videos} onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
    </div>
  );
};

YoutubePlayer.propTypes = {
  videos: PropTypes.array,
  activeVideo: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default YoutubePlayer;
