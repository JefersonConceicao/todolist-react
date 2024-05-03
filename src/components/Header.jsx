import style from './Header.module.css';
import logo from '../assets/Logo.svg';

export function Header(){
    return (
        <header className={style.header}>
            <img src={logo} alt="Logotipo todo"/>
        </header>       
    )
}