import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import FAQ from './Pages/FAQ';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
