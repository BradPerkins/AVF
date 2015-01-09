var api = require("api");

exports.getGeo = function() {
	Ti.Geolocation.purpose = "Coordinates Needed";
	Ti.Geolocation.getCurrentPosition(function(e) {
		alert(e);
		if (Ti.Platform.osname === "android") {
			var lat = e.coords.latitude;
			var lng = e.coords.longitude; 
			//var lat = 40.890064;
			//var lng = -82.66253662;
		} else {
			var lat = e.coords.latitude;
			var lng = e.coords.longitude; 
			//var lat = 40.890064;
			//var lng = -82.66253662;
		}
		api.getData(lat, lng);
	}, function(){	
		alert("Error Callback");
	}, {	
		timeout: 10000
	});
	
};

