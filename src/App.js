import React from 'react';
import ValorActual from './componet/ValorActual.jsx';
import Nav from './componet/Nav.jsx';
import HistorialBitcoin from './componet/HistorialBitcoin.jsx';


function App() {
  return (
    <div>
        <Nav />
      <div className='w3-container'>
        <ValorActual />
        <HistorialBitcoin />

      </div>
    </div>
  );
}

export default App;
