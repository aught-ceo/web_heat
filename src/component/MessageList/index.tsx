import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            tenetur ullam soluta dolorum repellat debitis iusto id aliquam unde,
            autem nulla alias cumque reprehenderit dicta facere, culpa optio
            dolor at?
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/augustoht.png"
                alt="Augusto Teixeira"
              />
            </div>
            <span>Augusto Teixeira</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            tenetur ullam soluta dolorum repellat debitis iusto id aliquam unde,
            autem nulla alias cumque reprehenderit dicta facere, culpa optio
            dolor at?
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/augustoht.png"
                alt="Augusto Teixeira"
              />
            </div>
            <span>Augusto Teixeira</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            tenetur ullam soluta dolorum repellat debitis iusto id aliquam unde,
            autem nulla alias cumque reprehenderit dicta facere, culpa optio
            dolor at?
          </p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/augustoht.png"
                alt="Augusto Teixeira"
              />
            </div>

            <span>Augusto Teixeira</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
