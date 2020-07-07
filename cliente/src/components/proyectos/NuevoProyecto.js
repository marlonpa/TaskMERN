import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';



const NuevoProyecto = () => {

    // proyectoState(1), context para mostrar u ocultar el fomulario NuevoProyecto
    const proContext = useContext(proyectoContext)

    // proyectoState(2)extraemos el value que viene desde proyectosContext.js
    const {formulario, errorform, mostraFormulario, agregarProyecto, errorFormulario} = proContext;

    // 1.state del formulario
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });

    //2. extraemos los campos
    const {nombre} = proyecto;

    // 3. capturamos los campos con el onChange
    const onCampos = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        } );
        
    };

    //4. enviamos el formulario
    const submitForm = e =>{
        e.preventDefault();

        // validmaos si hay espacios
        if(nombre ===''){
            errorFormulario(true);
            return;
        }
        
        //proyectoState(3) funcion que toma el proyecto  para agregarlo al state
        agregarProyecto(proyecto);
        

        // resetear formulario
        guardarProyecto({
            nombre: ''
        })
    }

    //proyectoState(3) funcion onClick para mostrar el formulario
    const onMostrarFormProyecto = () => {
        mostraFormulario(true);
    };

   


    return ( 
        <Fragment>
            <button type="button" className="btn btn-primario btn-block" onClick={onMostrarFormProyecto}>
                Nuevo Proyecto
            </button>
            {formulario ? (
                <form className="formulario-nuevo-proyecto" onSubmit={submitForm}>
                    <input 
                        type="text" 
                        className="input-text" 
                        name="nombre" 
                        placeholder="Nombre del proyecto" 
                        value={nombre} 
                        onChange={onCampos}
                        />
                    <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto"/>

                </form>
                )
                :
                (null)
            }
            {errorform ? <p className="mesaje error">Error! este campo es obligatorio!</p>:null}
        </Fragment>
     );
}
 
export default NuevoProyecto;