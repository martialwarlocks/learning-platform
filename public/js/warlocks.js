function Hello() {
	alert("Hello, how are you dude!")
}



function addCity(cityName) {
	var start = "<citytag class=\"col-2\">";
	var end = "</citytag>";
	var result = start + cityName + end;

	return result;
}

function addPlaces() {
	//var c = addCity("Sandiago");

	//c = c + addCity("Los Angles");
	//c = c + addCity("Yosemite");

	var cities = ["Sandiago", "Los Angles", "Yosemite", "17 Mile", "Cupertino", "Sturtevant Falls", "California’s Pacific Coast Highway", "Santa Cruz"]

	var c = "";
	for (var i = 0; i < cities.length	; i++) {
		c = c + addCity(cities[i]);
	}



	document.getElementById("places").innerHTML = c;
}