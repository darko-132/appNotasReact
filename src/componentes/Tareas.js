import React from "react";
import '../styles/Tareas.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea( { id, texto, completado, completarTarea, eliminarTarea }){
    return(
        <article className={completado ? 'tareaContenedor completado' : 'tareaContenedor'}>
            <div 
            className="tareasTexto"
            onClick={() => completarTarea(id)}
            >
                {texto}
            </div>
            <div 
            className="tareasContenedorIcono"
            onClick={() => eliminarTarea(id)}
            >
               <AiOutlineCloseCircle className="tareasIcono"/>
            </div>
        </article>
    )
}

export default Tarea