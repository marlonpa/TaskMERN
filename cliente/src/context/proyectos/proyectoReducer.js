import {FORMULARIO_PROYECTO, OBTENER_PROYECTO, AGREGAR_PROYECTO,
     FORMULARIO_ERROR, PROYECTO_ACTUAL, ELIMINAR_PROYECTO}
 from '../../types';


export default(state, action) => {
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario:true
            }
        case OBTENER_PROYECTO:
            return {
                ...state,
                proyectos:action.payload
            }
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],  // copia de la lista de proyectos y el proyecto  insertado
                formulario: false,
                errorform: false
              
            }
        case FORMULARIO_ERROR:
            return {
                ...state,
                errorform: true
            }
        case PROYECTO_ACTUAL:
            return {
                ...state,
                selproyecto: state.proyectos.filter(selproyecto => selproyecto.id=== action.payload) 
                /* busca en la bd de los proyecto si el id que viene del payload es igual en la bd
                 y extrae el de mismo id */
            } 
        case ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.filter(selproyecto => selproyecto.id !== action.payload), 
                /* busca en la bd de los proyecto si el id que viene del payload es difernete en la bd
                    y extrae los demas id y elimina el que queda */
                selproyecto: null
            }                                                     
        default:
            return state;
    }
}