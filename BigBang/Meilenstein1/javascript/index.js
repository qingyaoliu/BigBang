function validateForm() {

    var regexNames = /^[a-zäöü]+$/i;

    var vorname = document.getElementsByName('vorname')[0].value;
    var nachname = document.getElementsByName('name')[0].value;
    var verein = document.getElementsByName('verein')[0].value;
    var headcoach = document.getElementsByName('hcoach')[0].value;
    var assistantcoach = document.getElementsByName('acoach')[0].value;

    if (!vorname.match(regexNames) || !nachname.match(regexNames) || !verein.match(regexNames) 
        || !headcoach.match(regexNames) || !assistantcoach.match(regexNames)) {

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
		xhr.open("POST","http://139.59.134.26/api/players", true);
		xhr.onload = function(e) {
		  if (e == true) {
                        alert("Daten werden erfolgreich gesendet");
                  } else {
			alert("Error: Daten können nicht gesendet werden");
		  }
		};
		xhr.send(formData);
    }
}
