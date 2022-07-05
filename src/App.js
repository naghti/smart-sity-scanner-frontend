import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import SignIn from "./pages/SignIn";
import './app.css'
import SelectRole from "./pages/SelectRole";
import SignUp from "./pages/SignUp";
import SelectControl from "./pages/SelectControl";
import SmartCityScanner from "./pages/SmartCityScanner";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SelectRole/>} />
          <Route path='/signin/:role' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/control' element={<SelectControl/>}/>
          <Route path='/scanner' element={<SmartCityScanner/>}/>

          <Route path='*' exact element={<SelectRole/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
