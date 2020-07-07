import React, { useState, useContext, Fragment, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

   // proyectoState(1), context para mostrar el proyecto actual
   const proContext = useContext(proyectoContext);
   const {selproyecto} = proContext; 
   // obtene la funcion agregar Tarea del context de la tarea
   const tareasContext = useContext(tareaContext);
   const {seleccionartarea,errortarea,agregarTareas, validarForm, obtenerTareas,actualizarTarea} = tareasContext;

   // USE EFFECT DETECTA SI HAY UNA TAREA SELECCIONADA
   useEffect(()=>{
       if(seleccionartarea !== null){
           guardarTarea(seleccionartarea);
       }else{
           guardarTarea({
               nombre:''
           })
       }

   }, [seleccionartarea])
   
   // state tarea
   const [tarea, guardarTarea] = useState({
       nombre:''
   })
   // extraemos campos
   const { nombre} = tarea;
   // sino haz seleccionado proyecto, no muestra el formulario de tarea.
   if(!selproyecto) return null;

   //array destructuring para extraer el proyecto actual
   const [proyectoActual] = selproyecto;

      

   // capturar campos del form
   const onCampos = e =>{
       guardarTarea({
            ...tarea,
            [e.target.name]:e.target.value
       });
   };

   // enviamos el formulario
   const enviarForm = e =>{
       e.preventDefault();

       // validar tareas
       if(nombre.trim()===''){
        validarForm();
        return
       }

       // si es edicion o nueva tarea
       if(seleccionartarea === null){
            // agregar nueva tarea
            tarea.proyectoId=proyectoActual.id;
            tarea.estado = false;
            agregarTareas(tarea);
       }else{
           // actualizar tarea existente
           actualizarTarea(tarea);
       }
              
       

       // obtener y filtrar las tareas del proyecto actual

       obtenerTareas(proyectoActual.id);

       //reinicia formulario

       guardarTarea({
           nombre:''
       });
   };
   
  
   

    return ( 
        <Fragment>
        
        <div className="formulario">
            
            <form onSubmit={enviarForm}>
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text" 
                        name="nombre" 
                        placeholder="Ingresa nueva tarea..."
                        value={nombre}
                        onChange={onCampos}
                        />
                    
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" 
                    value={seleccionartarea ? "Editar Tarea": "Agregar Tarea"} />
                    
                </div>
                
            </form>
            {errortarea ? <p className=" mensaje error">El campo no puede estar vacío!</p>: null}
            
        </div>
        
        </Fragment>
     );
}
 
export default FormTarea;