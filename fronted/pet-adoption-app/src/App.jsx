import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomeAdoptPage from './pet-adoption/pet-adoption-pages/HomeAdoptPage/HomeAdoptPage';
import HomePutUpForAdoptionPage from './pet-adoption/pet-adoption-pages/HomePutUpForAdoptionPage/HomePutUpForAdoptionPage';
import InitialScreenPage from './pet-adoption/pet-adoption-pages/InitialScreenPage/InitialScreenPage';
import LoadingScreenPage from './pet-adoption/pet-adoption-pages/LoadingScreenPage/LoadingScreenPage';
import LoginPage from './pet-adoption/pet-adoption-pages/LoginPage/LoginPage';
import OnboardingPage from './pet-adoption/pet-adoption-pages/OnboardingPage/OnboardingPage';
import RegisterOnePage from './pet-adoption/pet-adoption-pages/RegisterOnePage/RegisterOnePage';
import RegisterTwoPage from './pet-adoption/pet-adoption-pages/RegisterTwoPage/RegisterTwoPage';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<HomeAdoptPage />} />
        <Route path='/home-put-up-for-adoption' element={<HomePutUpForAdoptionPage />} />
        <Route path='/initial-screen' element={<InitialScreenPage />} />
        <Route path='/loading-screen' element={<LoadingScreenPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/onboarding' element={<OnboardingPage />} />
        <Route path='/register-one' element={<RegisterOnePage />} />
        <Route path='/register-two' element={<RegisterTwoPage />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
