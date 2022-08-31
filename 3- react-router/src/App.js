import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Development from './components/Services/Developments.js/Development';
import CyberSecurity from './components/Services/CyberSecurity/CyberSecurity';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profil/:id' element={<Profile />} />
        <Route path='/services' element={<Services />}>
          <Route path='/services/developpement' element={<Development />} />
          <Route path='/services/cybersecurite' element={<CyberSecurity />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />

    </Routes>
    </div>
  );
}

export default App;
