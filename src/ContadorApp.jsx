import { useState } from 'react'

export const ContadorApp = ({ value }) => {

    const [contador, setContador] = useState(value)

    const handleClick = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <h1>Contador: {contador}</h1>

            <button onClick={handleClick}>
                + Contador
            </button>
        </>
    )
}

