import { useContext } from 'react'
import styles from './App.module.scss'
import { LoginBox } from './components/loginBox/index.'
import { MessageList } from './components/messageList'
import { SendMessageForm } from './components/sendMessageForm'
import { AuthContext } from './contexts/auth'

export function App() {
  const {user} = useContext(AuthContext)

  return (
    <main className={`${styles.contentWrapper} ${!!user? styles.contentSigned: ''}`}>
      <MessageList/>
      {!!user ? <SendMessageForm/> : <LoginBox/>}
    </main>
  )
}


