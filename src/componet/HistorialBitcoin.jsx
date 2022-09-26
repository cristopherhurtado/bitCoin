import React, { useEffect, useState } from 'react';
import { LineChart} from 'react-chartkick';
import 'chartkick/chart.js';
import { conexionApi2 } from '../api/Bitcoin';

export const HistorialBitcoin = () => {
 
    const [valorHistorico, setValorHistorico] = useState([]);          

    useEffect (() => {
      conexionApi2(setValorHistorico);
    
    },[])

  return (
    <div className='w3-card-4' id='valorHistoria'>
      <p>Ultimo Mes</p>
        
        <LineChart data={valorHistorico} />
    </div>
  )
}

export default HistorialBitcoin