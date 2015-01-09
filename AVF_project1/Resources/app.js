//Bradley Perkins
//AVF 1501
//Weather App

if(Ti.Network.online){
	geo = require("geo");
	geo.getGeo();
}else{
	alert("No Network");
}
