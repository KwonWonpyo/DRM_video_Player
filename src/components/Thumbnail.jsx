import React from 'react';
import 'styles/thumbnail.css';

function Thumbnail(props) {
  const { info } = props;
  const { thumbnail, title, uploadedDate, uploader, videoId } = info;

  return (
    <a className="thumbnail" href={`/videoplayer/${videoId}`}>
      <img src={`data:image/jpeg;base64,${thumbnail}`} alt={title} />
      <span>{title}</span>
      <span>{uploadedDate}</span>
      <span>{uploader}</span>
      <span>{videoId}</span>
    </a>
  );
}

export default Thumbnail;
