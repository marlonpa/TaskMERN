import {TAREAS_PROYECTO, AGREGAR_TAREAS_PROYECTO, VALIDAR_TAREA,
     ELIMINAR_TAREA,ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA} 
from '../../types';

export default(state, action)=>{
    switch(action.type){
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
            case AGREGAR_TAREAS_PROYECTO:
                return {
                    ...state,
                    tareas: [...state.tareas, action.payload],  // copia de la lista de tareas y la tarea insertada
                    errortarea:false                 
                  
                }
            case VALIDAR_TAREA:
                return {
                    ...state,
                    errortarea: true
                    
                }
            case ELIMINAR_TAREA:
                return {
                    ...state,
                    tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
                }
            case ESTADO_TAREA:
                return {
                    ...state,
                    tareas: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
                }
            case TAREA_ACTUAL:
                return {
                    ...state,
                    seleccionartarea: action.payload
                }
            case ACTUALIZAR_TAREA:
                return {
                    ...state,
                    tareas: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
                    errortarea:false
                }
        default:
            return state;

    }

}