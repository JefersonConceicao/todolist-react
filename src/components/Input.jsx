import style from './Input.module.css';

export function Input({...props}){
    return (
        <input  
            className={style.input} 
            {...props}
        />
    )
}