function validateForm() {

    var regexNames = /^[a-z??¨¹]+$/i;

    var vorname = document.getElementsByName('vorname')[0].value;
    var nachname = document.getElementsByName('name')[0].value;
    var verein = document.getElementsByName('verein')[0].value;
    var headcoach = document.getElementsByName('hcoach')[0].value;
    var asscoach = document.getElementsByName('acoach')[0].value;

    if (!vorname.match(regexNames) || !name.match(regexNames) || !verein.match(regexNames) 
        || !headcoach.match(regexNames) || !assistant.match(regexNames)) {

        alert("Einige Eingaben sind fehlerhaft. Bitte ¨¹berpr¨¹fen Sie ihre Eingaben");
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
 	
