import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    //   <Router>
    //   <NavBar />
    //   {/* <br /> */}
    //   <Route path='/' exact component={ExerciseList} />
    //   {/* <Route path='/edit/:id' component={EditExercise} />
    //   <Route path='/create' component={CreateExercise} />
    //   <Route path='/user' component={CreateUser} /> */}
    // </Router> 
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ExerciseList />}></Route>        
          <Route path="/edit/" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise/>} />
          <Route path="/user" element={<CreateUser/>} />     
      </Routes>
    </Router>
  );
}

export default App;
