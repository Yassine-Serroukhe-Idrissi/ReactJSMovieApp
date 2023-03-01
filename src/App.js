import React from 'react';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Home from './component/Home';
import Popular from './component/Popular';
import Details from './component/Details';
import Similar from './component/Similar';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='popular' element={<Popular/>}/>
        <Route path="movie/details/:id" element={<Details/>}/>
        <Route path="movie/similar/:id" element={<Similar/>}/>
      </Routes>
    </BrowserRouter>
    
  );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
