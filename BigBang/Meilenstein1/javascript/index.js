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
    
function sendForm(form) {
    if (validateForm()){
 	var formData = new FormData(form);
 
        request('POST', 'http://139.59.134.26/', formData, function (success)) {
            if (success == true) {
                alert("Die Daten werden erfolgreich gesendet");
            } else {
                alert("Die Daten k?nnen nicht gesendet werden");
            }
        }
    }
}
 	
