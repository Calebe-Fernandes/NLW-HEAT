import styles from './App.module.scss'
import { LoginBox } from './components/loginBox/index.'
import { MessageList } from './components/messageList'

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList/>
      <LoginBox/>
    </main>
  )
}


