import React, { useEffect, useState } from 'react';
import Thumbnail from 'components/Thumbnail';
import { listVideos } from 'serverAPI';
import 'styles/home.css';

function Home() {
  // TODO: 20개씩 끊어서 로딩
  // TODO: onScroll 시에 추가로 더 가져오기
  const [load, setLoad] = useState(false);
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    async function loadThumbnails() {
      // You can await here
      const vidoeList = await listVideos();
      const { content, pageable, totalPages, totalElements, last, number, sort, size, numberOfElements, first, empty } = vidoeList;
      const thumbnailssss = content.map(info => <Thumbnail key={info.videoId} info={info} />);
      setThumbnails(thumbnailssss);
      // ...
      setLoad(true);
    }
    loadThumbnails();

    if (thumbnails.length === 0) {
      thumbnails.push('업로드 된 동영상이 없습니다.');
    }
  }, []);

  return (
    <div className="home_background">
      <div className="video_list">
        <div className="video_list_title">업로드된 동영상</div>
        {load ? thumbnails : '불러오는 중입니다.'}
      </div>
    </div>
  );
}
export default Home;
