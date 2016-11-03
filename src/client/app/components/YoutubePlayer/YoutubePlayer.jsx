import _ from 'lodash';
import React, { PropTypes } from 'react';

import YTSearch from 'youtube-api-search';

import reduxForm from './parts/SearchBar.jsx';
import VideoList from './parts/VideoList.jsx';
import VideoDetail from './parts/VideoDetail.jsx';

const apiKey = 'AIzaSyBSoHvaEKzgtRp6vfUDlnRorIdieTPRmFc';

const YoutubePlayer = ({ videos, activeVideo, onChange, onSubmit }) => {

  const videoSearch = (searchQuery) => {
    console.log('searching', searchQuery);

    onChange(searchQuery);
    // YTSearch({ key: apiKey, term: searchQuery }, (videos) => {
    //   this.setState({
    //     videos,
    //     selectedVideo: videos[0],
    //   });
    // });
  };

  const delayedSearchQuery = _.debounce((searchQuery) => { videoSearch(searchQuery); }, 300);
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
