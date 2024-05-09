import React, { useState } from 'react'
import { AgregarTarea } from './componentes/AgregarTarea';

const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {visto && '✅'}
        </li>

    );
}

export const ListadoApp = () => {
    const addTask = () => {
        setArreglo([...arreglo, { nombre: 'nuevo', visto: false }]);
    }

    let listadoSecciones = [
        { nombre: "Instalaciones necesarias", visto: true },
        { nombre: "Uso de Vite", visto: true },
        { nombre: "Componentes", visto: true },
        { nombre: "Variables en JSX", visto: true },
        { nombre: "Props", visto: true },
        { nombre: "Eventos", visto: true },
        { nombre: "useState", visto: true },
        { nombre: "Redux", visto: false },
        { nombre: "customHooks", visto: false }
    ];



    const [arreglo, setArreglo] = useState(listadoSecciones);

    return (
        <>
            <h1>Listado de temas del curso</h1>
            <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>
            <ol>
                {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>
        </>
    )
}

