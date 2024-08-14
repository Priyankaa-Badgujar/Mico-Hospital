import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/HOME/Home';
import Carasol from './Component/Carasol/Carasol';
import Testinomil from './Component/testinomils/Testinomil';
import Partestinomil from './Component/testinomils/Partestinomil';
import Contact from './Component/CONTACT/Contact';
import Foot from './Component/footer/Foot';
import { Route, Routes } from 'react-router-dom';
import Home1 from './Component/HOME/Home1';
import Cara from './Component/cara/Cara';
import Treatment2 from './Component/Treatment/Treatment2';


function App() {
  
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<Home1></Home1>}></Route>
        <Route path='/treat' element={<Treatment2></Treatment2>}></Route>
        <Route path='/doctor' element={<Carasol></Carasol>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/testi' element={<Partestinomil></Partestinomil>}></Route>
      </Routes>
      <Foot></Foot>

    </div>
  );
}

export default App;
