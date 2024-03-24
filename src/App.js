import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import ApBooking from './Components/ApBooking';
import ContactForm from './Pages/ContactForm';
import Treatments from './Pages/Treatments/Treatments';
import Appointment from './Pages/Appointment';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <ApBooking />
              <About />
              <Services />
              <Profile />
              <ContactForm/>
              <Contact />
            </>
          }
        />
        <Route path='/service/:id' element={<Treatments/>}/>
        <Route path='/invisalign' element={<Appointment/>}/>
      </Routes>
    </>
  );
};

export default App;
