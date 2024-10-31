import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import HomeAdoptPage from './pet-adoption/pet-adoption-pages/HomeAdoptPage/HomeAdoptPage';
import HomePutUpForAdoptionPage from './pet-adoption/pet-adoption-pages/HomePutUpForAdoptionPage/HomePutUpForAdoptionPage';
import InitialScreenPage from './pet-adoption/pet-adoption-pages/InitialScreenPage/InitialScreenPage';
import LoadingScreenPage from './pet-adoption/pet-adoption-pages/LoadingScreenPage/LoadingScreenPage';
import WelcomePage from './pet-adoption/pet-adoption-pages/WelcomePage/WelcomePage';
import OnboardingPage from './pet-adoption/pet-adoption-pages/OnboardingPage/OnboardingPage';
import CreateAccount from './pet-adoption/pet-adoption-pages/CreateAccount/CreateAccount';
import Login from './pet-adoption/pet-adoption-pages/Login/Login';
import PersonalData from './pet-adoption/pet-adoption-pages/PersonalData/PersonalData';
import DetailsPage from './pet-adoption/pet-adoption-pages/DetailsPage/DetailsPage';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<OnboardingPage />} />
            <Route path='/home-adopt' element={<HomeAdoptPage />} />
            <Route path='/home-put-up-for-adoption' element={<HomePutUpForAdoptionPage />} />
            <Route path='/pet-details' element={<DetailsPage />} />
            <Route path='/welcome-page' element={<WelcomePage />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/personal-data' element={<PersonalData />} />
            <Route path='/login' element={<Login />} />
            <Route path='/loading-screen' element={<LoadingScreenPage />} />
            <Route path='/initial-screen' element={<InitialScreenPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
