//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Assam';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1154fbd3bmsh8cee037176335c8p11f811jsn3d36a8fbdd39',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const searchbox=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const icon=document.querySelector(".weather-icon");
 function getweather(city){
	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
	.then(response=>response.json())
	.then((response)=>{
		
		 cloud_pct=response.cloud_pct
		 temp.innerHTML=response.temp
		 searchbox.innerHTML=response.searchbox 
		 //feels_like.innerHTML= response.feels_like
		 humidity.innerHTML =response.humidity
		// min_temp.innerHTML=response.min_temp
		// max_temp.innerHTML =response.max_temp 
		 wind_speed.innerHTML =response.wind_speed 
		 //wind_degrees.innerHTML =response.wind_degrees
		 //sunrise.innerHTML =response.sunrise
		 //sunset.innerHTML=response.sunset
		console.log(response)
		cityName.innerHTML=city
		

		
 })
.catch (error=>console.error(error));
};

getweather("Tripura");


btn.addEventListener("click",()=>{
	getweather(searchbox.value);
})

