import {BrouserRouter, Routes, Router } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';

export default function App() {
  return (
    <BrouserRouter>
    <Header/>
    <Router>
      <Router path='/' element={<Home />} />\
      <Router path='/sign-in' element={<SignIn />} />
      <Router path='/sign-up' element={<SignUp />} />
      <Router path='/about' element={<About />} />

    </Router>
    </BrouserRouter>

      
  );
}

