
  var xhr=new XMLHttpRequest();
	xhr.open('GET','http://server/api/players');
	xhr.responseType='json';
	xhr.onload=function(){
	var data=xhr.response;
	    if(data !== null){
		console.log(data);
	    }
	};
	xhr.send();
	

 window.onload=function(){
	var jsonResponse = xmlHttpReq.responseText;
	var porvinceJsons = eval("("+ jsonResponse +")");
	for(var i=0; i<porvinceJsons.length; i++){
		alert("vorname="+porvinceJsons[i].vorname);
		alert("naem="+porvinceJsons[i].name);
		alert("verein="+porvinceJsons[i].verein);
		alert("hcoach="+porvinceJsons[i].hcoach);
		alert("aktiv="+porvinceJsons[i].aktiv);
		alert("position="+porvinceJsons[i].position);
		alert("number="+porvinceJsons[i].number);
		alert("jahr="+porvinceJsons[i].jahr);
		alert("favorit="+porvinceJsons[i].favorit);
	}
  }


 
