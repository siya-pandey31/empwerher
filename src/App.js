import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './Pages/Aboutus'; // Correct import
import WhatWeDo from './Pages/WhatWeDo'; // Create this component
import TheTeam from './Pages/TheTeam'; // Create this component
import Home from './Pages/Home';
import Login from './Pages/Login';
import Category from './Pages/Category';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/what-we-do' element={<WhatWeDo />} />
          <Route path='/the-team' element={<TheTeam />} />
          <Route path='/login' element={<Login />} />
          <Route path='/category' element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
