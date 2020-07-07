import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    // 1.state del formulario
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    });

    //2. extraemos los campos
    const {email, password} = usuario;

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
                <h1>Iniciar Sesión</h1>
                <form onSubmit={submitForm}>
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
                        <input 
                            type="submit"
                            value="Iniciar Sesion"
                            className="btn btn-primario btn-block"                            
                            
                        />                        

                    </div>
                </form>
                <Link to={'/NuevoUser'} className="enlace-cuenta">Registrase</Link>
            </div>
        </div>
     );
}
 
export default Login;