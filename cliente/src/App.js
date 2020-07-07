import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login'
import User from './components/auth/User';
import Proyectos from './components/proyectos/Proyectos'

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';


function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/NuevoUser" component={User}/>
            <Route exact path="/Proyectos" component={Proyectos}/>    
            
          </Switch>
        </Router>
      </TareaState>  
    </ProyectoState>
  );
}

export default App;
