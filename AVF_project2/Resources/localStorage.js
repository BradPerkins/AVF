var ui = require("ui");
Ti.Database.install("weather.sqlite", "weather");
//Ti.App.Properties.setString("weatherInfo", JSON.stringify(weatherInfo));
//var weatherInfo = JSON.parse(Ti.App.Properties.getString("weatherInfo"));

//create
exports.create = function(data){
	var db = Ti.Database.open("weather");
	db.execute("CREATE TABLE IF NOT EXISTS weatherInfo (id INTEGER PRIMARY KEY, temp TEXT,  location TEXT, wind TEXT, iconWord TEXT, iconPic TEXT, time1 TEXT, time2 TEXT, windDir TEXT, feels TEXT, chill TEXT, dayName TEXT, dayName2 TEXT, dayName3 TEXT, hi TEXT, lo TEXT, day1 TEXT, month1 TEXT, date1 TEXT, hi1 TEXT, lo1 TEXT, day2 TEXT, month2 TEXT, date2 TEXT, hi2 TEXT, lo2 TEXT, day3 TEXT, month3 TEXT, date3 TEXT, hi3 TEXT, lo3 TEXT, day4 TEXT, month4 TEXT, date4 TEXT, hi4 TEXT, lo4 TEXT, day5 TEXT, month5 TEXT, date5 TEXT, hi5 TEXT, lo5 TEXT)");
	db.execute("INSERT INTO weatherInfo (temp, location, wind, iconWord, iconPic, time1, time2, windDir, feels, chill, dayName, dayName2, dayName3, hi, lo, day1, month1, date1, hi1, lo1, day2, month2, date2, hi2, lo2, day3, month3, date3, hi3, lo3, day4, month4, date4, hi4, lo4, day5, month5, date5, hi5, lo5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )", data.temp, data.location, data.wind, data.iconWord, data.iconPic, data.time1, data.time2, data.windDir, data.feels, data.chill, data.dayName, data.dayName2, data.dayName3, data.hi, data.lo, data.day1, data.month1, data.date1, data.hi1, data.lo1, data.day2, data.month2, data.date2, data.hi2, data.lo2, data.day3, data.month3, data.date3, data.hi3, data.lo3, data.day4, data.month4, data.date4, data.hi4, data.lo4, data.day5, data.month5, data.date5, data.hi5, data.lo5);
	
	db.close();
	read();
};

//read
var read = function(data){
	var db = Ti.Database.open("weather");
	db.execute("CREATE TABLE IF NOT EXISTS weatherInfo (id INTEGER PRIMARY KEY, temp TEXT, location TEXT, wind TEXT, iconWord TEXT, iconPic TEXT, time1 TEXT, time2 TEXT, windDir TEXT, feels TEXT, chill TEXT, dayName TEXT, dayName2 TEXT, dayName3 TEXT, hi TEXT, lo TEXT, day1 TEXT, month1 TEXT, date1 TEXT, hi1 TEXT, lo1 TEXT, day2 TEXT, month2 TEXT, date2 TEXT, hi2 TEXT, lo2 TEXT, day3 TEXT, month3 TEXT, date3 TEXT, hi3 TEXT, lo3 TEXT, day4 TEXT, month4 TEXT, date4 TEXT, hi4 TEXT, lo4 TEXT, day5 TEXT, month5 TEXT, date5 TEXT, hi5 TEXT, lo5 TEXT)");
	var dbRows = db.execute("SELECT temp, location, wind, iconWord, iconPic, time1, time2, windDir, feels, chill, dayName, dayName2, dayName3, hi, lo, day1, month1, date1, hi1, lo1, day2, month2, date2, hi2, lo2, day3, month3, date3, hi3, lo3, day4, month4, date4, hi4, lo4, day5, month5, date5, hi5, lo5 FROM weatherInfo");
		while(dbRows.isValidRow()){
			var database = {
				temp: dbRows.fieldByName("temp"),
				location: dbRows.fieldByName("location"),
				wind: dbRows.fieldByName("wind"),
				iconWord: dbRows.fieldByName("iconWord"),
				iconPic: dbRows.fieldByName("iconPic"),
				time1: dbRows.fieldByName("time1"),
				time2: dbRows.fieldByName("time2"),
				windDir: dbRows.fieldByName("windDir"),
				feels: dbRows.fieldByName("feels"),
				chill: dbRows.fieldByName("chill"),
				dayName: dbRows.fieldByName("dayName"),
				dayName2: dbRows.fieldByName("dayName2"),
				dayName3: dbRows.fieldByName("dayName3"),
				hi: dbRows.fieldByName("hi"),
				lo: dbRows.fieldByName("lo"),
				day1: dbRows.fieldByName("day1"),
				month1: dbRows.fieldByName("month1"),
				date1: dbRows.fieldByName("date1"),
				hi1: dbRows.fieldByName("hi1"),
				lo1: dbRows.fieldByName("lo1"),
				day2: dbRows.fieldByName("day2"),
				month2: dbRows.fieldByName("month2"),
				date2: dbRows.fieldByName("date2"),
				hi2: dbRows.fieldByName("hi2"),
				lo2: dbRows.fieldByName("lo2"),
				day3: dbRows.fieldByName("day3"),
				month3: dbRows.fieldByName("month3"),
				date3: dbRows.fieldByName("date3"),
				hi3: dbRows.fieldByName("hi3"),
				lo3: dbRows.fieldByName("lo3"),
				day4: dbRows.fieldByName("day4"),
				month4: dbRows.fieldByName("month4"),
				date4: dbRows.fieldByName("date4"),
				hi4: dbRows.fieldByName("hi4"),
				lo4: dbRows.fieldByName("lo4"),
				day5: dbRows.fieldByName("day5"),
				month5: dbRows.fieldByName("month5"),
				date5: dbRows.fieldByName("date5"),
				hi5: dbRows.fieldByName("hi5"),
				lo5: dbRows.fieldByName("lo5"),

			};
			dbRows.next();
		}
	dbRows.close();
	db.close();
	ui.buildUi(database);	

};





















	
