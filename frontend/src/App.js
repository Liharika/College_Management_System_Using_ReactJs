import React from 'react'
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import Menu from './Menu';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path="/section1" element={<Section1 />} />
      <Route path="/section2" element={<Section2 />} />
      <Route path="/section3" element={<Section3 />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App