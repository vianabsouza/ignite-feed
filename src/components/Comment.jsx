import PropTypes from "prop-types";

import { useState } from "react";

import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/vianabsouza.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Barbara Viana</strong>
              <time
                title="1 de Janeiro às 08:13h"
                dateTime="2024-01-01 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Apludir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

Comment.propTypes = {
  content: PropTypes.string,
  onDeleteComment: PropTypes.func.isRequired,
};
