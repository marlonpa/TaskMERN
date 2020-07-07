import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {
     
      // proyectoState(1), context para mostrar el proyecto actual
     const proContext = useContext(proyectoContext);
     const {selproyecto} = proContext; 
    
     // nos traemos al funcion eliminar tarea
     const tareasContext = useContext(tareaContext);
     const {eliminarTareas, obtenerTareas, cambiarEstadoTarea, guardarTareaActual} = tareasContext;
    
      // extraemos para recupero el iddel proyecto activo o seleccionado
      const [proyectoActual] = selproyecto;

     // funcion del btn que elimina la tarea
     const clickEliminar = id => {
         eliminarTareas(id);
         obtenerTareas(proyectoActual.id);
     }

     // funcion que cambia el estado de la tare
     const cambiarEstado = tarea => {
         if(tarea.estado){
             tarea.estado = false;
         }else {
             tarea.estado = true;
         }

         cambiarEstadoTarea(tarea);
     }

     // agregar tarea actual cuando el usuario desea editarla
     const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
     }



    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                { tarea.estado ?
                 (<button type="button" className="completo" onClick={()=> cambiarEstado(tarea)}>Completa</button>)
                 :
                 (<button type="button" className="incompleto" onClick={()=> cambiarEstado(tarea)}>Incompleta</button>)
                }

            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario" onClick={()=> seleccionarTarea(tarea)}>Editar</button>
                <button type="button" className="btn btn-secundario" onClick={()=> clickEliminar(tarea.id)}>Eliminar</button>

            </div>
            
        </li>
     );
}
 
export default Tarea;