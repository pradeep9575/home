
let temp = document.getElementById("temp");
let btn = document.getElementById("btn");
let input = document.getElementById("city");


btn.addEventListener("click", () => {


	let CityNametext = input.value;

	fetch("https://api.openweathermap.org/data/2.5/weather?q="+CityNametext+"&appid=3fd5600ccb375aac05a0a04678f1bb5b&units=metric")
		.then((e) => {

			return e.json();

		})
		.then((Data) => {
			console.log(Data);
			console.log(Data.main.temp)
			temp.innerHTML =Data.main.temp;
			cityname.innerHTML = Data.name;
			icon.innerHTML = Data.weather[0].icon;
			summary.innerHTML =Data.weather[0].description

		})
		
		.catch(() => {
			console.log("not run")
		})


})

