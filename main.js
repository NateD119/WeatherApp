function getWeather() {  
    let message = "";
    let message2 = "";
    let message3 = "";
    let theSpan = document.getElementById('currently');
    let theSpan2 = document.getElementById('temp');
    let theSpan3 = document.getElementById('wind');

    console.log("hello");
    
    fetch('http://dataservice.accuweather.com/currentconditions/v1/48329?'
    )
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            console.log(json[i]);
            message += json[i].WeatherText + "<br>";
            message2 += json[i].Temperature.Imperial.Value + "<br>";
            message3 += json[i].HasPrecipitation + "<br>";
          }//end for loop
          theSpan.innerHTML = message;
          theSpan2.innerHTML = message2;
          theSpan3.innerHTML = message3;
        })
//            .catch(err => console.error(err));
}// end getWeather

function onHover() {
    document.getElementById('hover').src ='Images/rainy.jpg';
}
function offHover() {
    document.getElementById('hover').src = 'Images/sunny.jpg';
}

function start() {
    let btn = document.getElementById('checkWeather');

    btn.addEventListener('click', getWeather);
}//end start

window.addEventListener('load', start);

function onHover() {
    document.getElementById('mainImage').src ='Images/rainy.jpg';
}
function offHover() {
    document.getElementById('mainImage').src = 'Images/sunny.jpg';
}