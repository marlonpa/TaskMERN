import React, { useReducer } from 'react';
import uuid from 'uuid/dist/v4';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTO, AGREGAR_PROYECTO,
     FORMULARIO_ERROR, PROYECTO_ACTUAL, ELIMINAR_PROYECTO} 
     from '../../types'


// state principal para la dministracion de proyecto (crear, eliminar, edita...)
const ProyectoState = props => {
    //listado de  proyectos
    const proyectos=[
        {id:1, nombre:"Nueva bd"},
        {id:2, nombre:"Usar express"}
        
    ];

    // declaramos un estado inicial
    const initialState = {
         /*creamos una propierdad llamada formulario(este se refiere al formulario NuevoProyecto,
         lo iniciamos en false) en false no permitira mostrar el formulario en el componente NuevoProyecto*/
        proyectos : [],
        formulario : false,
        errorform: false,
        selproyecto: null
    
        
    }
    // envio para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);
    
    // ---funciones para el CRUD ---

    /*definimos funcion para mostrar el formulario(informacion viene del reducer),
    teniendo en cuenta el index.js(types),el dispacth evalua el types (FORMULARIO_PROYECTOS)
         con la opcion en el switch de proyectoReduce(quien se encarga de cambiar el state)*/
    const mostraFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    /** Listar lo proyectos */
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTO,
            payload : proyectos
        });
    }

    /** AGREGAR un nuevo proyecto, agrega un id con la libreria uuid */
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();
        // insertamos el proyecto a la lista
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    
    }

    // ERROR de formulario deja el campo en blanco
    const errorFormulario = () => {
        dispatch({
            type:FORMULARIO_ERROR

        });
    }

    // Selecciona el proyecto que vamos a ver
    const proyectoActual = (proyectoid) => {
        dispatch({
            type:PROYECTO_ACTUAL,
            payload: proyectoid
        });
    }

     // Eliminar el proyecto actual
     const eliminarProyecto = proyectoid => {
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload: proyectoid
        });
    }

    

    
    return(
        <proyectoContext.Provider 
        
        value={{
                formulario: state.formulario,
                proyectos : state.proyectos,
                errorform : state.errorform,
                selproyecto: state.selproyecto,
                mostraFormulario,
                obtenerProyectos,
                agregarProyecto,
                errorFormulario,
                proyectoActual,
                eliminarProyecto
                }}
         >
            {props.children}
        </proyectoContext.Provider>
    );

}

export default ProyectoState;

/*  enviamos el ProyectoState  a app.js para que quede habilitado para todos los componentes*/