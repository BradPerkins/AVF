

var win1 = Ti.UI.createWindow({
	backgroundColor: "gray",
	layout: "vertical"
});

var label1 = Ti.UI.createLabel({
	text: "latitude: ",
	top: 20,
	color: "white"
});

var label2 = Ti.UI.createLabel({
	text: "longitude: ",
	top: 20,
	color: "white"
});
/*
exports.buildUi = function(jsonData) {
	
	for (var i=0, j=jsonData.length; i<j; i++){
		label1.text = "Latitude: " + jsonData.lat;
		label2.text = "Longitude: " + jsonData.lng;	
	}
*/	
	
	win1.add(label1);
	win1.open();
			
//};
