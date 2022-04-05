import React, { useState } from "react";
import '../styles/IngresarTarea.css'
import { v4 as uudiv4 } from 'uuid'


function IngresarTarea(props){

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value)
        console.log(e.target.value)
    }
    const manejarEnvio = e =>{
        e.preventDefault();
        
        const tareaNueva = {
            id: uudiv4(),
            texto: input,
            completado: false
        }
        props.onSubmit(tareaNueva);
    }

    return(
        <form 
        className="IngresarTarea"
        onSubmit={manejarEnvio}>
            <input 
            className="tareaInput"
            type="text" 
            placeholder="Escribe una tarea"
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tareaBoton">
                Agregar tarea
            </button>
        </form>
    )
}
export default IngresarTarea;