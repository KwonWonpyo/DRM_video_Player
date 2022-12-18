import React from 'react';
import VideoPlayer from 'components/VideoPlayer';
import Thumbnail from 'components/Thumbnail';
import 'styles/home.css';

function Home() {
  // TODO: 20개씩 끊어서 로딩
  // TODO: onScroll 시에 추가로 더 가져오기
  const array = [1,2,3,4,5,6,7,8,9,10,11];

  const vidoeList = array.map((video) => <Thumbnail video={video}/>);

  return (
    <div className='home_background'>
      <div className='video_list'>
        <div className='video_list_title'>업로드된 동영상</div>
        {vidoeList}
      </div>
      <div className='video_player'>
        {VideoPlayer}
      </div>
    </div>
  );
}
export default Home;
