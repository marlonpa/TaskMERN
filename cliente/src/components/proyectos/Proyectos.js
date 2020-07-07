import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListarTareas from '../tareas/ListarTareas'

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <FormTarea />
                    <div className="contenedor-tareas ">
                        <ListarTareas/>
                    </div>
                </main>
            </div>

        </div>
     );
}
 
export default Proyectos;