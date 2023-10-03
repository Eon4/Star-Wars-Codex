import style from '../Style/header.module.scss'
import HeaderImg from  '../assets/images/headerstarwars.jpg'

export function Header(){
    return (
        <header>
            <img className={style.Headerimg} src={HeaderImg} alt="header" />

        </header>
    )
}