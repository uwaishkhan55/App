import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import login from "./components/login"
import register from "./components/register"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import verification from './components/verification';

function App() {
  return (
    <Router>
      <div className="container">
     <Navbar/>
      <br/>
      <Route path="/" exact component={login} />
      <Route path="/register" component={register} />
    <Route path="/verification" component={verification} /> 
      </div>
    </Router>
  );
}

export default App;
