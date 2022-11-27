import React from 'react';
import FrontEnd from './pages/FrontEnd';
import { GlobalStyle } from './GlobalStyles';
import PlusBackend from './pages/PlusBackend';
import PlusDB from './pages/PlusDB';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Loading from './pages/Loading';
function App() {

  return (
    <>
    <GlobalStyle/> 

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route path="/FrontEnd" element={<FrontEnd />} />
        <Route path="/PlusBackend" element={<PlusBackend />} />
        <Route path="/PlusDB" element={<PlusDB/>}/>
     
      </Routes>
    </BrowserRouter>
</>

  );
}

export default App;
