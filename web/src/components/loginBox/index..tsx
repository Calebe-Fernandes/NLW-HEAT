import styles from './styles.module.scss';
import{VscGithubInverted} from 'react-icons/vsc'
import { useEffect } from 'react';
import { api } from '../../services/api';

type AuthResponse = {
    token:string,
    user:{
        id:string,
        avatar_url:string,
        name:string,
        login:string
    }
}

export function LoginBox(){
    const signInUrl= `https://github.com/login/oauth/authorize?scope=user&client_id=0ed5cd270441d20aa49c`;

    async function signIn(gitHubCode: string){
        const response = await api.post<AuthResponse>('authenticate',{
            code: gitHubCode
        });

        const {token, user } = response.data;

        localStorage.setItem('@dowhile:token', token)
        console.log(user);        
    }
    
    useEffect(() =>{
        const url = window.location.href;
        const hasGitHubCode = url.includes(`?code=`);

        if(hasGitHubCode){
            const [urlWithoutCode, gitHubCode] = url.split('?code=')
            window.history.pushState({},'',urlWithoutCode);
            signIn(gitHubCode)
        }
    },[])

    return(
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGitHub}>
                <VscGithubInverted size = "24"/>
                Entrar com GitHub
            </a>
        </div>
    )
}