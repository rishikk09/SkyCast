// console.log('Hellooo ji jmd');

// const API_KEY = "e2a7aa6e64ca52f4b0d2eb9deddeeb53";
// async function showWeather() {
   
// try {

//     let lat = 14.3434;
//     let lon = 74.765;

//     // let city = "goa";

//     const response = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}');

//     const data = await response.json();

//     // console.log("Weather data:-> " + data);

    // let newPara = document.createElement('p');
    // newPara.textContent = ;
    // document.body.appendChild(newPara);

//     renderWeatherInfo(data);

// }

// catch(err) {
//     //handleeerrrorrr
// }

// console.log(data);
// }





const API_KEY = "e2a7aa6e64ca52f4b0d2eb9deddeeb53";

function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    // newPara.textContent = ;
    document.body.appendChild(newPara);
}


async function getCustomWeatherDetails() {

 try{
    let longitude = 15.6333;
    let latitude = 18.3333;

    let result = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat={latitude}&lon={longitude}&exclude={part}&appid={API key}');
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

let data = await data.json();

console.log(data);
 }

 catch{
    console.log("Error found", err);
 }
}


function getLocation() {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    else {
        console.log("no geolocation supported");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}