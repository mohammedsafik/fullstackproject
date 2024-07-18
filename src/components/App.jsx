import Home from './Home';
import Login from './Login';
import Register from './Register';
import Calc from './Calculator';
import Open from "./Open"
import Open2 from "./Open2"

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/cal" element ={<Calc/>}/>
          <Route path="/setup" element ={<Open/>}/>
          <Route path="/setup2" element ={<Open2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
