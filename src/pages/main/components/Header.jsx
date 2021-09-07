import style from "./Header.module.css"

export default function Header () {
    return (
        <div className={style.container}>
            <h1 className={style.textHeader}>todos</h1>
            <input type="text" className={style.inputForm}/>
        </div>
    )
    
    
}