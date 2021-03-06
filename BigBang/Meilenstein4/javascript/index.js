function validateForm() {

    var regexNames = /^[a-zäöü]+$/i;

    var vorname = document.getElementsByName('vorname')[0].value;
    var nachname = document.getElementsByName('name')[0].value;
    var verein = document.getElementsByName('verein')[0].value;
    var headcoach = document.getElementsByName('hcoach')[0].value;
    var assistantcoach = document.getElementsByName('acoach')[0].value;
    var number = document.getElementsByName('number')[0].value;
    var jahr = document.getElementsByName('jahr')[0].value;

    if (!vorname.match(regexNames) || !nachname.match(regexNames) || !verein.match(regexNames) 
        || !headcoach.match(regexNames) || !assistantcoach.match(regexNames) || !((number >= 4) && (number <= 15)) 
        || !((jahr >= 1) && (jahr <= 2016))) {

        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        return false;

    }else{
        return true;
         
    }
}


//SENDEN VON DATEN
function sendForm(form) {
    if (validateForm()){
 	var formData = new FormData(form);
 	
        var xhr = new XMLHttpRequest();
	xhr.open("POST","http://127.0.0.1:8080/api/players");
	xhr.onload = function(e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			alert("OK: Daten werden erfolgreich gesendet");
                  } else {
			alert("Error: Daten können nicht gesendet werden");
		}
	};
	xhr.send(formData);
    }
}
	

//empfangen von Daten und Aufbau der Tabelle
function getPlayers(fav) {
	var xhr = new XMLHttpRequest(); // new HttpRequest instance 
	var link = "http://127.0.0.1:8080/api/players";
	var obFavPlayer = "";
	if (fav) {
		obFavPlayer = "?favorites=true";
	}
	xhr.open("GET", link + obFavPlayer, true);
	xhr.setRequestHeader("Content-Type","application/json"); // dem Server mitteilen, welche Medientyp wir empfangen wollen
	xhr.onload = function(e) {
		var data = JSON.parse(xhr.response); //Json-Objekt werden ausgelesen
		buildTable(data);
	}
	xhr.send(null);
}

//aufbau einer Tabelle
function buildTable(dataArray) {
	var arr = dataArray;
	var table = document.getElementById("oldTable"); // Find a <table> element with id="oldTable":
	
	if (table.rows.length > 1) { 
        deleteOldTable(table);
        }

	arr.forEach(function(object) {
		var row = table.insertRow(); // Create an empty <tr> element
		row.insertCell(0).innerHTML = object.vorname+ " " +object.name; //insert cell(<td> Elem.), nämlich objekt, at the 1st Positon of row(<tr>),
		row.insertCell(1).innerHTML = object.club; 
		row.insertCell(2).innerHTML = object.coach;
		row.insertCell(3).innerHTML = object.position;
		row.insertCell(4).innerHTML = object.number;
		row.insertCell(5).innerHTML = object.year;	
	});
}


//loesche alte Tabelle
function deleteOldTable(table) {
	var rows = table.rows.length;
	for (var i=rows-1; i > 1; i--) {
		table.deleteRow(i);
	}
}
	
	
function setAll(){
	document.getElementById('all');
}
	

function setFav(){
	document.getElementById('fav');
}
