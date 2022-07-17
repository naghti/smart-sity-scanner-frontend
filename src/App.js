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
import {CSSTransition, TransitionGroup} from "react-transition-group";
import state from "./states/state";
import MobileMenu from "./components/MobileMenu";
import {observable} from "mobx";
import {observer} from "mobx-react-lite";
import P from "./pages/P";
import SmartCityScannerBusiness from "./pages/SmartCityScannerBusiness";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Loader from "./components/Loader";
import Result from "./pages/Result";
let App = observer(() => {
  return (
    <div className="App">
      <Router>
        <TransitionGroup>

          {
            state.mobileMenu &&
              <CSSTransition
                  key={1}
                  timeout={200}
                  classNames="item"
              >
                <MobileMenu/>
              </CSSTransition>
          }

          {
            state.loader &&
              <CSSTransition
                  key={1}
                  timeout={200}
                  classNames="loader"
              >
                <Loader/>
              </CSSTransition>
          }
        </TransitionGroup>
        <Routes>

          <Route path='/' element={<About/>} />

          <Route path='/p' element={<P/>} />

          <Route path='/feedback' element={<Feedback/>} />

          <Route path='/signin' element={<SignIn/>}/>

          <Route path='/signup' element={<SignUp/>}/>

          <Route path='/mailconfirmation' element={<MailConfirmation/>}/>

          <Route path='/control' element={<SelectControl/>}/>

          <Route path='/selectrole' element={<SelectRole/>} />

          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/calculator/:page' element={<CalculatorPage/>}/>

          <Route path='/scanner' element={<SmartCityScanner/>}/>

          <Route path='/scanner/:page' exact element={<ScannerPage/>}/>

          <Route path='/result' exact element={<Result/>}/>

          <Route path='*' exact element={<UnknowPage/>} />
        </Routes>
      </Router>
    </div>
  );
})

export default App;
