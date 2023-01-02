import React from 'react';
import 'styles/thumbnail.css';

function Thumbnail(info) {
  const { video } = info;
  const { id, name, thumbnail, src } = video;

  return (
    <a className="thumbnail" href={`/videoplayer/${id}`}>
      <img src="/logo512.png" alt="동영상 대표 이미지" />
      <span>{name}</span>
    </a>
  );
}

export default Thumbnail;
