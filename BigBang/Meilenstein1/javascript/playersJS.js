<script  >
     window.onload=function(){
	var oDiv=document.getElementById('div1')
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

</script>

<script>
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
	}
 </script>


 <script>
  window.onload=function(){
	var oBtn=document.getElementById('btn1');
	var oUl=document.getElementById('ul1');

	oBtn.onclick=function(){
	    ajax('abc.txt?t='+new Date().getTime, function(str){
		var arr=eval(str);
		for(var i=0; i<arr.length;i++){

		var oLi=document.createElement('li');
		oLi.innerHTML='name<strong>'+arr[i].user+'</strong>password:<span>'+arr[i].password+'</span>';
		oUl.appendChild(oLi);
		}
	    }, function(){
		alert('scheitert');
	    }};
	};
  };
  </script>