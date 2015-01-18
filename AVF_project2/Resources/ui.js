

//Current Temp Info
var tempView = Ti.UI.createLabel({
	text:  "",
	color: "black",
	font: {fontSize: 40, fontWeight: "bold", fontFamily: "Sans Serif"},
	top: 10,  
});

var hiTemp = Ti.UI.createLabel({
	text:  "",
	color: "black",
	font: {fontSize: 20, fontWeight: "regular", fontFamily: "Sans Serif"},
	//top: 10,  
});

var loTemp = Ti.UI.createLabel({
	text:  "",
	color: "black",
	font: {fontSize: 20, fontWeight: "regular", fontFamily: "Sans Serif"},
	top: 80,  
});

var wind = Ti.UI.createLabel({
	text: "",
	color: "black",
	font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
	bottom: 5
});

var iconView = Ti.UI.createLabel({
	text: "",
	color: "black",
	font: {fontSize: 15, fontWeight: "regular", fontFamily: "Sans Serif"},
	left: 22,
	bottom: 50,
});

var iconImage = Ti.UI.createImageView({
	image: "",
	width: 50,
	height: 40,
	left: 20,
	bottom: "40%" 
});

var feels = Ti.UI.createLabel({
	text: "",
	color: "black",
	font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
	right: 22,
	bottom: 70,
});

var chill = Ti.UI.createLabel({
	text: "",
	color: "black",
	font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
	right: 22,
	bottom: 50,
});

var currentInfo = Ti.UI.createView({
	//backgroundColor: "red",
	top: 120,
	width:"104%",
	borderColor: "gray",
	borderWidth: 2,
	height: "25%"
});

currentInfo.add(iconImage);
currentInfo.add(iconView);
currentInfo.add(wind);
//currentInfo.add(wind2);
currentInfo.add(tempView);
currentInfo.add(hiTemp);
currentInfo.add(loTemp);
currentInfo.add(feels);
currentInfo.add(chill);

////////////////////////////////////////
// Date
var dateView = Ti.UI.createView({
	//backgroundColor: "#e0e0e0",
	top: 62,
	height: 30
});

var dayName = Ti.UI.createLabel({
	text: "",
	color: "black",
	font: {fontSize: 25, fontWeight: "regular", fontFamily: "Sans Serif"},
	//top: "50%"
});

dateView.add(dayName);
////////////////////////////////////////
var win1 = Ti.UI.createWindow({
	backgroundGradient: {
        type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '200%', y: '50%' },
        colors: [ { color: '#a6c7fc', offset: 0.50}, { color: '#e1ecfe', offset: 0.25 }, { color: '#a6c7fc', offset: 0.50 } ],
    }
});

var mainView = Ti.UI.createView({
	//backgroundColor: "#e0e0e0",
});

var locationView = Ti.UI.createLabel({
	text: "",
	color: "black",
	font: {fontSize: 25, fontWeight: "bold", fontFamily: "Sans Serif"},
	top: 10
});

var spacer1 = Ti.UI.createView({
	height: 2,
	backgroundColor: "gray",
	//width: "90%",
	opacity: "50%",
	top: 60
});

var timeView2 = Ti.UI.createLabel({
	text: "",
	color: "black",
	font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
	bottom: 5
});

//Button Views
var buttonView =Ti.UI.createView({
	//backgroundColor: "red",
	bottom: 24,
	height: "50%"
});

var b1 = Ti.UI.createLabel({
	text: "",
	width:"104%",
	color: "black",
	borderColor: "gray",
	top: 0,
	borderWidth: 1,
	height: "20%",
});
var b2 = Ti.UI.createLabel({
	text: "",
	width:"104%",
	color: "black",
	borderColor: "gray",
	top: "20%",
	borderWidth: 1,
	height: "20%"
});
var b3 = Ti.UI.createLabel({
	text: "",
	width:"104%",
	color: "black",
	borderColor: "gray",
	top: "40%",
	borderWidth: 1,
	height: "20%"
});
var b4 = Ti.UI.createLabel({
	text: "",
	width:"104%",
	color: "black",
	borderColor: "gray",
	top: "60%",
	borderWidth: 2,
	height: "20%"
});
var b5 = Ti.UI.createLabel({
	text: "",
	width:"104%",
	color: "black",
	borderColor: "gray",
	top: "80%",
	borderWidth: 1,
	height: "20%"
});

buttonView.add(b1);
buttonView.add(b2);
buttonView.add(b3);
buttonView.add(b4);
buttonView.add(b5);

////////////////////////////////
//buildUI Function
exports.buildUi = function(data){
	tempView.text = data.temp + "°F";  
	locationView.text =  data.location;
	wind.text = "Wind Speed: " + data.wind + " Mph.  " + " Wind Direction: " + data.windDir;
	iconView.text = data.iconWord;
	iconImage.image = data.iconPic;
	timeView2.text = data.time2;
	dayName.text = data.dayName + ", " + data.dayName2 + " " + data.dayName3.substring(0,2);
	hiTemp.text = "H / " + data.hi + "ºF";
	loTemp.text = "L / " + data.lo + "ºF";
	feels.text = "Feels like  " + data.feels + "ºF";
	chill.text = "Wind Chill " + data.chill + "ºF";
	//button layouts
	b1.text = "	" + data.day1 + ", " + data.month1 + " " + data.date1.substring(0,2) + "					" + data.hi1 + " / " + data.lo1 + "ºF ";
	b2.text = "	" + data.day2 + ", " + data.month2 + " " + data.date2.substring(0,2) + "					" + data.hi2 + " / " + data.lo2 + "ºF ";
	b3.text = "	" + data.day3 + ", " + data.month3 + " " + data.date3.substring(0,2) + "					" + data.hi3 + " / " + data.lo3 + "ºF ";
	b4.text = "	" + data.day4 + ", " + data.month4 + " " + data.date4.substring(0,2) + "					" + data.hi4 + " / " + data.lo4 + "ºF ";
	b5.text = "	" + data.day5 + ", " + data.month5 + " " + data.date5.substring(0,2) + "					" + data.hi5 + " / " + data.lo5 + "ºF ";
	win1.open();

};
///////////////////////////////////////
//Detail Windows
var detailWin = Ti.UI.createWindow({
	backgroundGradient: {
        type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '200%', y: '50%' },
        colors: [ { color: '#a6c7fc', offset: 0.50}, { color: '#e1ecfe', offset: 0.25 }, { color: '#a6c7fc', offset: 0.50 } ],
    }
});

//Close button for detail window
var closeButton = Ti.UI.createLabel({
	text: "BACK",
	backgroundColor: "gray",
	height: 40,
	font: {fontSize: 25, fontWeight: "bold", fontFamily: "Sans Serif"},
	width: "100%",
	bottom: 0,
	textAlign: "center",
});

//close flip transition
var closeWin = function(){
	detailWin.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};

closeButton.addEventListener("click", closeWin);

var temp = Ti.UI.createLabel({
	text:  "",
	color: "black",
	font: {fontSize: 40, fontWeight: "bold", fontFamily: "Sans Serif"},
	top: 10,  
});
detailWin.add(closeButton);
detailWin.add(temp);

///////////////////////////////////////
//Detail Functions
var b1Ui = function(data){
	detailWin.open();
	};
var b2Ui = function(){
	detailWin.open();
};
var b3Ui = function(){
	detailWin.open();
};
var b4Ui = function(){
	detailWin.open();
};
var b5Ui = function(){
	detailWin.open();
};

b1.addEventListener("click", b1Ui);
b2.addEventListener("click", b2Ui);
b3.addEventListener("click", b3Ui);
b4.addEventListener("click", b4Ui);
b5.addEventListener("click", b5Ui);
/////////////////////////////////////////
win1.add(mainView);
win1.add(dateView);
win1.add(currentInfo);
win1.add(buttonView);

mainView.add(locationView);
mainView.add(timeView2);
mainView.add(spacer1);



