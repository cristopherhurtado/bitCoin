import React, { useEffect, useState } from 'react';
import { conexionApi } from '../api/Bitcoin';

const ValorActual = () => {

    const [valorActual, setValorActual] = useState([]);

    useEffect (() => {
        conexionApi(setValorActual, '/currentprice/USD.json');
    },[])

    useEffect(() => {
      setTimeout(() => { conexionApi(setValorActual, '/currentprice/USD.json')},60000 ) 
    }, [valorActual])

  return (
    <>
    <div className='w3-card-4' id='valorActual'>
      <p>Valor Actual</p>
      <span><p>${parseFloat(valorActual.rate_float).toFixed()} {valorActual.code}</p></span>
    </div>
    </>
  )
}

export default ValorActual
