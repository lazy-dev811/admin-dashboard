import _ from 'lodash';
import React, { Component } from 'react';

import YTSearch from 'youtube-api-search';

// import SearchBar from './SearchBar';
// import VideoList from './VideoList';
// import VideoDetail from './VideoDetail';

const apiKey = 'AIzaSyBSoHvaEKzgtRp6vfUDlnRorIdieTPRmFc';

class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: undefined,
    };

    this.videoSearch(this.state.searchQuery);
  }

  videoSearch(searchQuery) {
    YTSearch({ key: apiKey, term: searchQuery }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const delayedSearchQuery = _.debounce((searchQuery) => { this.videoSearch(searchQuery); }, 300);
    return (
      <div>
        {/* <SearchBar onSearchQueryChange={delayedSearchQuery} /> */}
        {/* <VideoDetail video={this.state.selectedVideo} /> */}
        {/* <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({ selectedVideo })} /> */}
      </div>
    );
  }
}

export default YoutubePlayer;
