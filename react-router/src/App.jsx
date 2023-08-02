
import {Routes, Route, Link} from "react-router-dom";
import Blue from "./components/blue";
import Red from "./components/red";
import Home from "./components/home";

function App() {
 return(
  <>
  <div id="container">
      <h1></h1>
      <div id="navbar">{
        <>
        <Link to="/Blue">
           Blue
        </Link>
        <Link to="/Red">
           Red
        </Link>
        <Link to="/">
          Home
        </Link>
           </>
      }</div>
      <div id="main-section">{
        <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path= "/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />}/>
        </Routes>
      }</div>
    </div>
  </>
 )
}

export default App
