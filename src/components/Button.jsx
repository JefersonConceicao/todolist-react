import style from './Button.module.css';

export function Button( { children, ...props}){
    return (
        <button className={style.button} {...props}> {children} </button> 
    )
}


