import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { listAllComments } from '../serverAPI';
import CommentEditor from './CommentEditor';

function CommentWrapper() {
  const [load, setLoad] = useState(false);
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   async function loadComments() {
  //     const commentList = await listAllComments();
  //     const { content } = commentList;
  //     const cmts = content.map(info => <Thumbnail key={info.videoId} info={info} />);
  //     setComments(cmts);
  //     setLoad(true);
  //   }
  //   loadComments();

  // },[]);

  // if (comments.length === 0) {
  //   return (
  //     <>
  //       <CommentEditor/>
  //       <div
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'column',
  //           alignItems: 'center',
  //           justifyContent: 'space-evenly',
  //           height: '100px',
  //           fontSize: 'large',
  //           textAlign: 'center',
  //         }}
  //       >
  //         <div
  //           style={{
  //             height: '40px',
  //             width: '40px',
  //             background: 'url(https://cdn-city.livere.com/images/img_NoReply.png) no-repeat',
  //           }}
  //         />
  //         <div style={{ color: '#757575', fontSize: '14px', lineHeight: '18px' }}>
  //           아직 댓글이 없습니다. 첫 댓글을 작성해 보세요.
  //         </div>
  //       </div>
  //     </>

  //   );
  // }

  return (
    <>
      <CommentEditor />
      <Comment key={1} />
      <Comment key={2} />
      <Comment key={3} />
      <Comment key={4} />
    </>
  );
}
export default CommentWrapper;
