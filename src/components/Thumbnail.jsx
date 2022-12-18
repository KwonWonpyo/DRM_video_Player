import React from 'react';
import 'styles/thumbnail.css'

function Thumbnail(video) {
  const info = video + 1;

  return (
    <div className='thumbnail'>
      아무 텍스트 ${info}
    </div>
  );
}

export default Thumbnail;
