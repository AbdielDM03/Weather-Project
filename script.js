//PSEUDO CODE
document.getElementById('btn').addEventListener('click', getData)

//1-GRAB THE INPUT
function getData(){
  const city = document.getElementById('cityInput').value
  const displayWeather = document.getElementById('displayWeather')
  const country = document.getElementById('country')
  const region = document.getElementById('region')
  const temp = document.getElementById('temp')

//2-CALL THE API
  fetch(`http://api.weatherapi.com/v1/current.json?key=88cd9600fad1482687f175501230409&q=${city}&aqi=no`)
  .then((res) => res.json()) // Parse response as JSON
  .then((data) => {
    console.log(data.current.condition.text);
    const outputWeather = data.current.condition.text
    console.log(data.location.country);
    const outputCountry = data.location.country
    console.log(data.location.region);
    const outputRegion = data.location.region
    console.log(data.location.temp_f);
    const outputTemp = data.current.temp_f

      //3-DISPLAY INFO IN THE DOM
  displayWeather.innerHTML = outputWeather 
  country.innerHTML = outputCountry
  region.innerHTML = outputRegion
  temp.innerHTML = outputTemp
  })



  .catch((err) => {
    console.log(`error ${err}`);
  });

}





