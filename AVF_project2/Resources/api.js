var ui = require("ui");
var local = require("localStorage");

exports.getData = function(latitude,longitude) {
	var xhr = Ti.Network.createHTTPClient({
		onload : function(e){
			var json = JSON.parse(this.responseText);
			var data = {
				//current info 
				temp: json.current_observation.temp_f,
				location: json.location.city + ", " + json.location.state,
				wind: json.current_observation.wind_mph,
				iconWord: json.current_observation.icon,
				iconPic: json.current_observation.icon_url,
				time2: json.current_observation.observation_time,
				time1: json.current_observation.observation_time_rfc822,
				windDir: json.current_observation.wind_dir,
				feels: json.current_observation.feelslike_f,
				chill: json.current_observation.windchill_f,
				dayName: json.forecast.simpleforecast.forecastday[0].date.weekday,
				dayName2: json.forecast.simpleforecast.forecastday[0].date.monthname_short,
				dayName3: json.forecast.simpleforecast.forecastday[0].date.day,
				hi: json.forecast.simpleforecast.forecastday[0].high.fahrenheit,
				lo: json.forecast.simpleforecast.forecastday[0].low.fahrenheit,
				//button info
				//day 1
				day1: json.forecast.simpleforecast.forecastday[0].date.weekday_short,
				month1: json.forecast.simpleforecast.forecastday[0].date.monthname_short,
				date1: json.forecast.simpleforecast.forecastday[0].date.day,
				hi1: json.forecast.simpleforecast.forecastday[0].high.fahrenheit,
				lo1: json.forecast.simpleforecast.forecastday[0].low.fahrenheit,
				//day2
				day2: json.forecast.simpleforecast.forecastday[1].date.weekday_short,
				month2: json.forecast.simpleforecast.forecastday[1].date.monthname_short,
				date2: json.forecast.simpleforecast.forecastday[1].date.day,
				hi2: json.forecast.simpleforecast.forecastday[1].high.fahrenheit,
				lo2: json.forecast.simpleforecast.forecastday[1].low.fahrenheit,
				//day 3
				day3: json.forecast.simpleforecast.forecastday[2].date.weekday_short,
				month3: json.forecast.simpleforecast.forecastday[2].date.monthname_short,
				date3: json.forecast.simpleforecast.forecastday[2].date.day,
				hi3: json.forecast.simpleforecast.forecastday[2].high.fahrenheit,
				lo3: json.forecast.simpleforecast.forecastday[2].low.fahrenheit,
				//day 4
				day4: json.forecast.simpleforecast.forecastday[3].date.weekday_short,
				month4: json.forecast.simpleforecast.forecastday[3].date.monthname_short,
				date4: json.forecast.simpleforecast.forecastday[3].date.day,
				hi4: json.forecast.simpleforecast.forecastday[3].high.fahrenheit,
				lo4: json.forecast.simpleforecast.forecastday[3].low.fahrenheit,
				//day5
				day5: json.forecast.simpleforecast.forecastday[4].date.weekday_short,
				month5: json.forecast.simpleforecast.forecastday[4].date.monthname_short,
				date5: json.forecast.simpleforecast.forecastday[4].date.day,
				hi5: json.forecast.simpleforecast.forecastday[4].high.fahrenheit,
				lo5: json.forecast.simpleforecast.forecastday[4].low.fahrenheit,
				
			};
						
			local.create(data);
		},
		onerror: function(){
			alert("api error");
		},
		timeout: 5000
	});
	var url = "http://api.wunderground.com/api/3c80ed8140f5bf74/geolookup/conditions/forecast/forecast10day/q/" + latitude + "," + longitude + ".json";
	xhr.open("GET", url);
	xhr.send(); 
	
};

