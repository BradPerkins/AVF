

exports.getData = function(latitude,longitude) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function() {
		var json = JSON.parse(this.responseText);
		
		var temp = json.current_observation.temp_f;
		var location = json.location.city + ", " + json.location.state;
		var wind = json.current_observation.wind_mph;
		var iconWord = json.current_observation.icon;
		var iconPic = json.current_observation.icon_url;
		var time = json.current_observation.observation_time;
		var windDir = json.current_observation.wind_dir;
		
		
		var titleLabel1 = Ti.UI.createLabel({
			text: "Bradley Perkins",
			color: "black",
			font: {fontSize: 40, fontWeight: "bold", fontFamily: "Times New Roman"},
			top: 50
		});
		
		var titleLabel2 = Ti.UI.createLabel({
			text: "AVF 1501",
			color: "black",
			font: {fontSize: 40, fontWeight: "bold", fontFamily: "Times New Roman"},
			top: 100
		});
		
	    
	    var spacer1 = Ti.UI.createView({
			height: 5,
			backgroundColor: "gray",
			width: "90%",
			opacity: "50%",
			top: 150
		});
		
		
		var tempView = Ti.UI.createLabel({
			text: temp + "° F",
			color: "black",
			font: {fontSize: 40, fontWeight: "bold", fontFamily: "Times New Roman"},
			top: 310
		});
		
		var locationView = Ti.UI.createLabel({
			text: location,
			color: "black",
			font: {fontSize: 40, fontWeight: "bold", fontFamily: "Times New Roman"},
			top: 250
		});
		
		var windView = Ti.UI.createLabel({
			text: "Wind Speed: " + wind + " Mph" + " " + windDir,
			color: "black",
			font: {fontSize: 20, fontWeight: "bold", fontFamily: "Times New Roman"},
			top: 470
		});
		
		var iconView = Ti.UI.createLabel({
			text: iconWord,
			color: "black",
			font: {fontSize: 40, fontWeight: "bold", fontFamily: "Times New Roman"},
			top: 390
		});
		
		var iconImage = Ti.UI.createImageView({
			image: iconPic,
			width: 100,
			height: 75,
			top: 340
		});
		
		var timeView = Ti.UI.createLabel({
			text: time,
			color: "black",
			font: {fontSize: 15, fontWeight: "bold", fontFamily: "Times New Roman"},
			bottom: 20
		});
		
		var win1 = Ti.UI.createWindow({
			backgroundColor: "#e0e0e0",
		});
		
		var mainView = Ti.UI.createView({
			backgroundColor: "#e0e0e0",

		});
		
		 
		win1.add(tempView);
		win1.add(locationView);
		win1.add(windView);
		win1.add(iconView);
		win1.add(timeView);
		win1.add(iconImage);
		win1.add(titleLabel1);
		win1.add(titleLabel2);
		win1.add(spacer1);
		
		win1.open();
		
	};
	
	
	xhr.timeout = 3000;
	var url = "http://api.wunderground.com/api/3c80ed8140f5bf74/geolookup/conditions/forecast/q/" + latitude + "," + longitude + ".json";
	xhr.open("GET", url);
	xhr.send(); 
};
