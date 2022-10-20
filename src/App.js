import React from 'react';
import FrontEnd from './pages/FrontEnd';
import { GlobalStyle } from './GlobalStyles';
import PlusBackend from './pages/PlusBackend';
import PlusDB from './pages/PlusDB'
function App() {
  return (
    <>
    <GlobalStyle/>
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
