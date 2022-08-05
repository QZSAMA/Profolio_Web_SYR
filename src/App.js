import Home from './Home';
import About from './About';
// import './assets/Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
// import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
      <BrowserRouter>
        <Routes>          
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
