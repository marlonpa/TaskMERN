import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const User = () => {
    // 1.state del formulario
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    //2. extraemos los campos
    const {nombre,email, password,confirmar} = usuario;

    // 3. capturamos los campos con el onChange
    const onCampos = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        } );
        
    };

    //4. enviamos el formulario
    const submitForm = e =>{
        e.preventDefault();

        // validmaos si hay espacios

        //validamos se hay minimo 6 caracteres

        // validamos si son iguales los password

        // realizamos la accion
    }


    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Registrarse</h1>
                <form onSubmit={submitForm}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre" 
                            name="nombre"
                            placeholder="Ingrese su nombre"
                            value={nombre}
                            onChange={onCampos}

                        />

                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email" 
                            name="email"
                            placeholder="Ingrese su email"
                            value={email}
                            onChange={onCampos}

                        />

                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password" 
                            name="password"
                            placeholder="Ingrese su password"
                            value={password}
                            onChange={onCampos}
                            
                            
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar</label>
                        <input 
                            type="password"
                            id="confirmar" 
                            name="confirmar"
                            placeholder="Confirme password"
                            value={confirmar}
                            onChange={onCampos}
                            
                            
                        />
                    </div>
                    <div className="campo-form">                       
                        <input 
                            type="submit"
                            value="Registrar"
                            className="btn btn-primario btn-block"                            
                            
                        />                        

                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">Iniciar Sesión</Link>
            </div>
        </div>
     );
}
 
export default User;