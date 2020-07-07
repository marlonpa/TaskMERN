import React,{useContext, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';



const ListarProyectos = () => {
    
    
    // proyectoState(1), context para listar los proyectos
    const proContext = useContext(proyectoContext)

     // proyectoState(2)extraemos el value que viene desde proyectosContext.js,
     const {proyectos , obtenerProyectos} = proContext;

     // obtener proyectos desde "bd", se ejecuta cada vez que se carga el componente por eso el []
     useEffect(()=>{
         obtenerProyectos();
     },[]);

     if(proyectos.length===0) return <p>No tiene proyectos, es hora de empezar a crear uno!</p>;

    return ( 
        <ul className="listado-proyectos">
          <TransitionGroup>
          {proyectos.map(project=>(
              <CSSTransition key = {project.id} classNames="tarea" timeout={200}>
                <Proyecto 
                
                project={project}/>
              </CSSTransition>
          ))}
          </TransitionGroup>
        </ul>
     );
}
 
export default ListarProyectos;