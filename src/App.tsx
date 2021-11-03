import styles from "./App.module.scss";
import { LoginBox } from "./component/LoginBox";
import { MessageList } from "./component/MessageList";

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  );
}
