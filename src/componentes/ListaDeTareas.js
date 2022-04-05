import React, { useState } from "react";
import IngresarTarea from "./IngresarTarea"
import '../styles/ListaDeTareas.css'
import Tarea from "./Tareas";

function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
        console.log(tarea)
        if (tarea.texto.trim()){ /* comprueba que no sea una tarea vacia */
            tarea.texto = tarea.texto.trim(); /* quita las espacios imnecesarios */
            const tareaActualizada = [tarea, ...tareas]; /* agrega la nueva tarea y la muestra de primera */
            setTareas(tareaActualizada); /* agrega las tareas al estado */
        }
    }
    const eliminarTarea = id =>{
        const tareaActualizada = tareas.filter(tarea => tarea.id !== id); /* crea un nuevo arreglo con los elementos que no tenga el id del elemento a eliminar */
        setTareas(tareaActualizada);
    }
    const completarTarea = id =>{
        const tareaActualizada = tareas.map(tarea =>{
            if (tarea.id === id){
                tarea.completado = !tarea.completado
            }
            return tarea
        });
        setTareas(tareaActualizada)
    }

    return(
        <>
        <IngresarTarea onSubmit={agregarTarea} />
        <div className='TareasListaContenedor'>
            {
                tareas.map((tarea) =>
            <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completado={tarea.completado}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
            />
            )}
        </div>
        </>
    )
}
export default ListaDeTareas;