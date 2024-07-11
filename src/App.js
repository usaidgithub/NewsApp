import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Newscomponent from "./components/Newscomponent";
import { useState } from "react";

function App() {
  const[country,setCountry]=useState('in')
  const[category,setCategory]=useState('general')
  return (
    <Router>
      <>
        <Navbar setCountry={setCountry} setCategory={setCategory}/>
        <Routes>
          <Route exact path="/" element={<Newscomponent country={country} category={category}/>}/>
        </Routes>

      </>
    </Router>
  );
}

export default App;
