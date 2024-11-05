import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Home from './Pages/Home';
import Volunteer from './Pages/Volunteer';
import Ourimpact from './Pages/Ourimpact';
import Periodtracker from './Pages/Periodtracker';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/volunteer' element={<Volunteer/>}/>
          <Route path='/ourimpact' element={<Ourimpact/>}/>
          <Route path='/periodtracker' element={<Periodtracker/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/contact' element={<Login/>}/>
 
        </Routes>
      </Router>
    </div>
  );
}

export default App;


