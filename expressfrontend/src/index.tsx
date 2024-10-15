


import React from 'react';
import ReactDOM from 'react-dom/client';
import SodaLandPage from './pages/landpage';
import WelcomePage from './pages/welcomepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const LandPage:React.FC = () => {
      return (
        <>
        <Router>
          <Routes>
            <Route path='/' element={<SodaLandPage />}/>
            <Route path='/welcomepage' element={<WelcomePage />}/>
          </Routes>
        </Router>
       
        
        </>
      )
}
root.render( <LandPage />);

