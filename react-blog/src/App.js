import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Home from './Containers/Home/Home';
import { Routes, Route, Link } from 'react-router-dom';
import AddArticle from './Containers/AddArticle/AddArticle'
import Contact from './Containers/Contact/Contact'
import Article from './Containers/Article/Article'

function App() {
  return (

<>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecrire" element={<AddArticle /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:slug" element={<Article />} />
      </Routes>
    </>


  );
}

export default App;
