import PropTypes from "prop-types";

import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({ content }) {
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
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Apludir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

Comment.propTypes = {
  content: PropTypes.string,
};
