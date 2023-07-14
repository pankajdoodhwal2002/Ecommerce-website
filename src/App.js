import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
