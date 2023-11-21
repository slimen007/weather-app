const search = document.getElementById('box')



search.addEventListener('keypress',(event)=>{ //implimentation d une fonction
  if (event.key === 'Enter'){
    getWeatherReport(search.value.trim())//appelle fonction
    
  }
})

function getWeatherReport(city){
  // implementaion de la fonction

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1583a8c1140f569ff45c57f17ec621eb&units=metric`)

.then((rest)=>{
  return rest.json();
  
  
})
.then(showWeatherReport);}

function showWeatherReport(data){
  
  console.log(data)
  let apicod  = data.cod;

  if(apicod === '400'){
    alert("enter postion");
  }else if(apicod === '404'){
    alert("city not found")
  }else {

    const weather =document.getElementById("weather")
     console.log(data)
    weather.innerHTML = ` <div class="location-details"> <div class="city">${data.name},${data.sys.country}</div>
    <div class="date">date</div>
    </div>
    <div class="weather-status">
    <div class="temp">${Math.round(data.main.temp)}&deg;c</div>
    <div class "sti">${data.weather[0].main}    </div>
   
    <hr>
 
    <div class="day-details">
 <div class="basic"> <i class='bx bx-water' ></i> Humidity ${data.main.humidity} % <i class='bx bx-wind' ></i> Wind  ${ data.wind.speed} KMPH</div>
 </div>
 </div>`
 
 
 
 
let changeWeather = data.weather[0].main ;
changebg (changeWeather);


get_rest(search.value.trim());
  }
}

function changebg(weatherbg){
  const ig= document.getElementById('ig')
 switch (weatherbg) {
  case 'clear': ig.innerHTML=' <img src="/img/rain.png" id="ig">'
    
    break;
    case 'rain': ig.innerHTML=' <img src="/img/rain.png" id="ig">'
    
    break;
 
  default: ig.innerHTML=' <img src="/img/rain.png" id="ig">'
    break;
 }
}

function get_rest(rst){
  document.getElementById('box').value=" "; 

}



