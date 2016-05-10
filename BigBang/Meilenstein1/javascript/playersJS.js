
     window.onload=function(){
	var oDiv=document.getElementById('div1');
	var aBtn=oDiv.getElementsByTagName('input');
	var aDiv=oDiv.getElementsByTagName('div');
	
	for(var i=0; i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			for(var i=0; i<aBtn.length; i++){
				aBtn[i].className='';
				aDiv[i].style.display='none';
			}
			this.className='active';
			aDiv[this.index].style.display='block';
		};
	}
     };



window.onload=function(){
	var oBtn=document.getElementById('btn1');
	oBtn.onclick=function(){
	ajax(''http://139.59.134.26/api/players'',function(str){
		alert(str);
	});
     };
 };

function ajax(url, fnSucc, fnFaild){
	 if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}

	oAjax.open('GET', 'http://139.59.134.26/api/players?t='+new Date().getTime(),true);
	oAjax.send();
	oAjax.onreadystatechange=function(){
	if(oAjax.readState==4){
		if(oAjax.status==200){
			fnSucc(oAjax.responseText);
		}else{
			if(fnFaild){
		  	fnFaild(oAjax.status);
		}
     	}
     };
};


  window.onload=function(){
	var oBtn=document.getElementById('btn1');
	var oTr=document.getElementById('tr1');

	oBtn.onclick=function(){
	    ajax('http://139.59.134.26/api/players?t='+new Date().getTime, function(str){
		var arr=eval(str);
		for(var i=0; i<arr.length;i++){

		var oTd=document.createElement('tr');
		oTd.innerHTML='<td>'arr[i].vorname+'</td>'+'<td>'+arr[i].name+'</td>'
'<td>'arr[i].verein+'</td>'+'<td>'+arr[i].hcoach+'</td>';
		oTr.appendChild(oTd);
		}
	    }, function(){
		alert('scheitert');
	    });
	};
  };
