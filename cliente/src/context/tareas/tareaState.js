import React,{ useReducer } from 'react';
import tareaReducer from '../tareas/tareaReducer';
import tareaContext from '../tareas/tareaContext';
import {TAREAS_PROYECTO, AGREGAR_TAREAS_PROYECTO, VALIDAR_TAREA, ELIMINAR_TAREA,
     ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA} 
from '../../types';



const TareaState = props => {
    
    const initialState = {
        tareas: [
            {id: 1, nombre:'Descargar instalador', estado:true, proyectoId:1},
            {id: 2, nombre:'Validar Requirimiento', estado:false, proyectoId:2},
            {id: 3, nombre:'Instalar apliación', estado:true, proyectoId:1}
        ],
        tareasproyecto: null,
        errortarea:false,
        seleccionartarea: null

    }
    // state y dispatch
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    // CRUD

    //OBTENER LA LISTA DE TAREAS POR PROYECTO
    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload:proyectoId
        });
    }

    // AGREGAR TAREAS A UN PROYECTO
     const agregarTareas = tarea => {
         dispatch({
            type: AGREGAR_TAREAS_PROYECTO,
            payload: tarea
         });
     }

     // OBTENER ERROR DEL FORMULARIO TAREA
     const validarForm = () => {
         dispatch({
             type: VALIDAR_TAREA
         });
     }

     // ELIMINAR TAREAS POR ID DE UN PROYECTO
     const eliminarTareas = tarea => {
        dispatch({
           type: ELIMINAR_TAREA,
           payload:tarea
        });
    }

    // cambiar estado de la tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        });
    } 

    //  TAREA ACTUAL
    const guardarTareaActual = id => {
        dispatch({
            type:TAREA_ACTUAL,
            payload: id
        });
    }
    
    // ACTUALIZAR TAREA
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    }




    return(
        <tareaContext.Provider
            value={
                {
                    tareas: state.tareas,
                    tareasproyecto: state.tareasproyecto,
                    errortarea: state.errortarea,
                    seleccionartarea: state.seleccionartarea,
                    obtenerTareas,
                    agregarTareas,
                    validarForm,
                    eliminarTareas,
                    cambiarEstadoTarea,
                    guardarTareaActual,
                    actualizarTarea
                }
            }
        >
            {props.children}
        </tareaContext.Provider>

    );
}

export default TareaState;