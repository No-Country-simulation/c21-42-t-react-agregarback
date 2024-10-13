import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomeAdoptPage from './pet-adoption/pet-adoption-pages/HomeAdoptPage/HomeAdoptPage';
import HomePutUpForAdoptionPage from './pet-adoption/pet-adoption-pages/HomePutUpForAdoptionPage/HomePutUpForAdoptionPage';
import InitialScreenPage from './pet-adoption/pet-adoption-pages/InitialScreenPage/InitialScreenPage';
import LoadingScreenPage from './pet-adoption/pet-adoption-pages/LoadingScreenPage/LoadingScreenPage';
import WelcomePage from './pet-adoption/pet-adoption-pages/WelcomePage/WelcomePage';
import OnboardingPage from './pet-adoption/pet-adoption-pages/OnboardingPage/OnboardingPage';
import CreateAccount from './pet-adoption/pet-adoption-pages/CreateAccount/CreateAccount';
import Login from './pet-adoption/pet-adoption-pages/Login/Login';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<HomeAdoptPage />} />
        <Route path='/home-put-up-for-adoption' element={<HomePutUpForAdoptionPage />} />
        <Route path='/welcome-page' element={<WelcomePage />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path='/loading-screen' element={<LoadingScreenPage />} />
        <Route path='/initial-screen' element={<InitialScreenPage />} />
        <Route path='/onboarding' element={<OnboardingPage />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
