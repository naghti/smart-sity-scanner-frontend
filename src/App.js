import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import SignIn from "./pages/SignIn";
import './app.css'
import SelectRole from "./pages/SelectRole";
import SignUp from "./pages/SignUp";
import SelectControl from "./pages/SelectControl";
import SmartCityScanner from "./pages/SmartCityScanner";
import Calculator from "./pages/Calculator";
import CalculatorPage from "./pages/CalculatorPage";
import UnknowPage from "./pages/UnknowPage";
import ScannerPage from "./pages/ScannerPage";
import SmartCityScannerCitizen from "./pages/SmartCityScannerCitizen";
import MailConfirmation from "./pages/MailConfirmation";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SelectRole/>} />
          <Route path='/signin/:role' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/mailconfirmation' element={<MailConfirmation/>}/>
          <Route path='/control' element={<SelectControl/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/calculator/:page' element={<CalculatorPage/>}/>
          <Route path='/scanner' element={<SmartCityScanner/>}/>
          <Route path='/scanner/citizen' exact element={<SmartCityScannerCitizen/>}/>
          <Route path='/scanner/:role/:page' exact element={<ScannerPage/>}/>
          <Route path='/scanner/:page' exact element={<ScannerPage/>}/>

          <Route path='*' exact element={<UnknowPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
