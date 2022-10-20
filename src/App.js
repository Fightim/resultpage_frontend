import React from 'react';
import FrontEnd from './pages/FrontEnd';
import { GlobalStyle } from './GlobalStyles';
import PlusBackend from './pages/PlusBackend';
import PlusDB from './pages/PlusDB';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <GlobalStyle/>

    <BrowserRouter>
      <Routes>
        <Route path="/FrontEnd" element={<FrontEnd />} />
        <Route path="/PlusBackend" element={<PlusBackend />} />
        <Route path="/PlusDB" element={<PlusDB/>}/>
      </Routes>
    </BrowserRouter>


    <FrontEnd>

    </FrontEnd>

<hr/>
    <PlusBackend/>

    <hr/>
    <PlusDB/>
</>

  );
}

export default App;
