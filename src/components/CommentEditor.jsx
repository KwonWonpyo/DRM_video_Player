import React, { useEffect, useState } from 'react';
import 'styles/comment.css';
import 'styles/commentEditor.css';

function CommentEditor() {
  const [showPlacehodler, togglePlaceholder] = useState(true);
  const [isEmptyComment, setEmptyComment] = useState(true);

  const handlePlaceholder = () => {
    togglePlaceholder(false);
  };

  const handleEmptyComment = () => {
    const cmtBox = document.getElementById('cmt_input');
    if (cmtBox.innerText === '') setEmptyComment(true);
    else setEmptyComment(false);
  };

  const handleCancel = () => {
    togglePlaceholder(true);
  };

  return (
    <div className="cmt_editor">
      <div
        id="cmt_input"
        aria-label="댓글 추가"
        contentEditable="true"
        onFocus={handlePlaceholder}
        onInput={handleEmptyComment}
      />
      <div id="cmt_placeholder" style={{ visibility: `${showPlacehodler ? 'visible' : 'hidden'}` }}>
        댓글 추가
      </div>
      <div
        className="cmt_editor_action"
        style={{ display: `${showPlacehodler ? 'none' : 'flex'}` }}
      >
        <button className="cmt_submit" type="button" disabled={isEmptyComment}>
          등록
        </button>
        <button className="cmt_cancel" type="button" onClick={handleCancel}>
          취소
        </button>
      </div>
    </div>
  );
}
export default CommentEditor;
