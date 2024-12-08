import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './page/Home.js';
import About from './page/About.js';
import Contact from './page/Contact.js';
import Registration from './page/Registration.js';
import RootLayout from './RootLayout.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout /> } >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/registration' element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
