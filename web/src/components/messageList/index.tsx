import styles from './styles.module.scss'
import LogoImg from '../../assets/logo.svg'
import {api} from '../../services/api'
import { useEffect, useState } from 'react'

type Message = {
    id:string,
    text:string,
    user:{
        name:string,
        avatar_url:string
    }
}

export function MessageList(){

    const [messages,setMessages] = useState<Message[]>([]);


    useEffect(() =>{
        api.get<Message[]>('messages/last3').then(response =>{
            setMessages(response.data);
        })
    }, []);

    return(
        <div className = {styles.messageListWrapper}>
            <img src={LogoImg} alt="Do While" />

            <ul className = {styles.messageList}>
                {messages.map(message => {
                    return(
                        <li key = {message.id} className = {styles.message}>
                            <p className={styles.messageContent}>{message.text}</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImg}>
                                    <img src={message.user.avatar_url} alt={message.user.name} />
                                </div>
                                <span>{message.user.name}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        
        </div>
    )
}