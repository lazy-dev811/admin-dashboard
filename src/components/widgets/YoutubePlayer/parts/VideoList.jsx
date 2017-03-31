import React, { PropTypes } from 'react';
import VideoListItem from './VideoListItem.jsx';

const VideoList = ({ videos, onVideoSelect }) => (
  <ul className="col-md-4 list-group">
    {videos.map(video => (
      <VideoListItem video={video} key={video.etag} onVideoSelect={onVideoSelect} />
    ))}
  </ul>
);

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoList;
