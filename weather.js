/*$(document).ready(function() {
	var key = `&APPID=890d5237f22de1bc92c08a01c76bff8f`;
	var city =  document.getElementById("citytext").value;//"Dallas";
	var URL = `http://api.openweathermap.org/data/2.5/weather?q=` + city + key + `&units=metric`;
	console.log(city);
	$.getJSON(URL, function(data) {
		console.log(city);
		var city = data.name;
		
		$('#city').html(city);
		

	})

}); 
*/

$(document).ready(function() {
	
	document.getElementById('submit').addEventListener("click",reset);

	function reset() {
		var city = prompt("enter city");
	var key = `&APPID=890d5237f22de1bc92c08a01c76bff8f`;
	var URL = `http://api.openweathermap.org/data/2.5/weather?q=` + city + key + `&units=metric`;

	
	$.getJSON(URL, function(data) {
		console.log(data);
		var city = data.name;
		$('#city').html(city);
		var country = data.sys.country;
		$('#country').html(country);		
		var pic = data.weather["0"].icon + ".png";
		/*$('#icon').attr('src', pic);*/
		$(".icon").html("<img src=' + pic + '>");
		var desc = data.weather[0].description;
		$('#desc').html(desc);
		var temp = Math.round(data.main.temp);
		$('#tempnumb').html(temp);

	})
	}

})




