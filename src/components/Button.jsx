import '../styles/button.css'

export function Button ({title, func, href}){
return(
    <button href='./Inicio.jsx' className={func}>{title}&nbsp;&nbsp;&nbsp;&nbsp;{'>'}</button>
)
}