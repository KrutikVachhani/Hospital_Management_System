import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import About from './pages/About';
import Treatment from './pages/Treatment';
import Doctors from './pages/Doctors';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='About' element={<About />}></Route>
        <Route path='Treatment' element={<Treatment/>}></Route>
        <Route path='Doctors' element={<Doctors/>}></Route>
        <Route path='Testimonial' element={<Testimonial/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter> */}
    <Layout/>
    {/* <Header/> */}
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function//
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
