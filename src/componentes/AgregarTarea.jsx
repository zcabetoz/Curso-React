import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const data = {
            nombre : inputValue,
            visto : false
        }

        agregarTarea(tareas =>[...tareas, data])
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingrese nueva tarea"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

