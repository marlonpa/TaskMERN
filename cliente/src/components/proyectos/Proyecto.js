import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({project}) => {

     // proyectoState(1), context para mostrar u ocultar el fomulario NuevoProyecto
     const proContext = useContext(proyectoContext);
     // proyectoState(2)extraemos el value que viene desde proyectosContext.js
     const {proyectoActual} = proContext;
     // obtene la funcion del context de la tarea
     const tareasContext = useContext(tareaContext);
     const {obtenerTareas} = tareasContext;

     // FUNCION PARA SELECCIONAR EL PROYECTO ACTUAL
     const seleccionarProyecto = id => {
           proyectoActual(id);
           obtenerTareas(id);
     }


    return ( 
        <li>
              <button className="btn btn-blank" type="submit" 
              onClick={()=>seleccionarProyecto(project.id)}>
                    {project.nombre}
              </button>
          </li>
     );
}
 
export default Proyecto;