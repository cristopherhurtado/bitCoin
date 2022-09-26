import axios from "axios";

const baseUrl = 'https://api.coindesk.com/v1/bpi'

const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=month';


const conexionApi = async (state, path) => {
    const url = await axios.get(baseUrl + path);
    state(url.data.bpi.USD);
}

function conversorFecha (timeStamp){
    var date = new Date(timeStamp);
    return (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
}

let obj = {};
let fecha ;
let valorBitcoin ;
const conexionApi2 = async (state) => {
    const url2 = await axios.get(url);

    for  (let i=0; i < url2.data.prices.length; i++){
      
        fecha = conversorFecha(url2.data.prices[i][0]);
        valorBitcoin =  url2.data.prices[i][1];
        obj[fecha]= valorBitcoin;
    }
    state(obj);
}

export {
    conexionApi,
    conexionApi2
}