import React, {Fragment, useContext} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import Tarea from './Tarea';


const ListarTareas = () => {

    

     // proyectoState(1), context para mostrar u ocultar el fomulario NuevoProyecto
     const proContext = useContext(proyectoContext);
     // proyectoState(2)extraemos el value que viene desde proyectosContext.js, en este caso el proyectoactaul
     const {selproyecto, eliminarProyecto} = proContext;
     // obtener las tareas del proyecto
     const tareasContext = useContext(tareaContext);
     const {tareasproyecto} = tareasContext;

     if(!selproyecto) return <h2>Selecciona un proyecto</h2>

     // extraemos el nombre de proyecto actual
     const [proyectoActual] = selproyecto;

     const deleteProyecto = () => {
        eliminarProyecto(proyectoActual.id)
     }


    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length===0 ? <li className="tarea">No hay tareas</li>
                :
                <TransitionGroup>
                    {tareasproyecto.map(tarea=>(
                    <CSSTransition  key={tarea.id} timeout={200} classNames="tarea">
                        <Tarea 
                           
                            tarea={tarea}
                        />
                    </CSSTransition>
                ))}
                </TransitionGroup>
                } 
                

        </ul>
        <button type="button" className="btn btn-eliminar" onClick={deleteProyecto}>Eliminar Proyecto &times;</button>
        </Fragment>
        
      );
}
 
export default ListarTareas;