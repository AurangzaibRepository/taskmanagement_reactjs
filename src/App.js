import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Teams from './components/Teams';
import Tasks from './components/Tasks';
import Users from './components/Users';
import Categories from './components/Categories';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import './App.css';

function App() {
  return (
   <BrowserRouter>
      
      {/* Navbar component */}
      <Navbar />

      <div id='dv-main'>
        <div className='dv-box'>
        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/users' element={<Users />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
   </BrowserRouter>
  );
}

export default App;
