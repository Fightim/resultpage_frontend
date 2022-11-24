import React from 'react';
import FrontEnd from './pages/FrontEnd';
import { GlobalStyle } from './GlobalStyles';
import PlusBackend from './pages/PlusBackend';
import PlusDB from './pages/PlusDB';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
function App() {
  // const getData = async () => {
  //   let response = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
  //   return response.data;
  // }

  // let res = getData();

  // res.then((data) => {
  //   console.log(data);
  // });
  return (
    <>
    <GlobalStyle/> 

    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Loading />} /> */}
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
