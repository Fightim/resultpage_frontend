import React from 'react';
import FrontEnd from './pages/FrontEnd';
import { GlobalStyle } from './GlobalStyles';
import PlusBackend from './pages/PlusBackend';
import PlusDB from './pages/PlusDB';
import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import Loading from './pages/Loading';



function App() {
  return (
    <>
    <GlobalStyle/> 

    <BrowserRouter>
      <Routes>
        <Route path='/:token' element={<Loading />} />
        <Route path="/FrontEnd/:token" element={<FrontEnd/>}/>
        <Route path="/PlusBackend/:token" element={<PlusBackend />} />
        <Route path="/PlusDB/:token" element={<PlusDB/>}/>

     
      </Routes>
    </BrowserRouter>
</>

  );
}

export default App;
