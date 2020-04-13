//peticion al servicio Rest con promesas 
const axios = require('axios');


const getClima = async(lat, lng)=>{

const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2ac72a53a66248a26aad02405d7ce276&units=metric`)

return resp.data.main.temp;

}



module.exports = {
    getClima

}