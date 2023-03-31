import './App.css';
import { Cart } from './components/cart';
import Coffee from './components/Coffee';
import Head1 from './components/HeaderH';
import Nav from './components/Nav';
import Navigation from './components/Navigation';
import Pasteries from './components/Pasteries';
import Section1 from './components/sections';
import Tea from './components/Tea';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {
  return (
      <Router>
    <div className='main'> 
    { /* <Nav/>
      <Section1/>
    <Coffee/> */}
       <Head1/>
       <div style={{textAlign:"center"}}>
      <Navigation/>
      <Routes>
        <Route exact path='/coffee' element={<Coffee/>}></Route>
        <Route exact path='/tea' element={<Tea/>}></Route>
        <Route exact path='/pasteries' element={<Pasteries/>}></Route>
      </Routes>
      </div>
    <Cart/>
    </div>
    </Router>
  );
}

export default App;
