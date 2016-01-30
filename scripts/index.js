window.onload = function(){
	var el = document.getElementById('changjing');
	var time = document.getElementById('time');
	for(i=0;i<52;i++){
		var els = document.createElement('div');
		els.setAttribute('class','botton');
		els.style.backgroundColor ='#737371';
		if(Math.random()>0.5){
			els.innerHTML = String.fromCharCode(Math.floor(Math.random()*26)+97) ;
		}else{
			els.innerHTML = String.fromCharCode(Math.floor(Math.random()*26)+65) ;
		}
		el.appendChild(els);
	}
	var els = document.getElementsByClassName('botton');
	var j = 0;
	var a = 0;
	var kaiguan = false;
	document.onkeydown = function(e){
		if(String.fromCharCode(e.keyCode+32 ) ==els[j].innerHTML && e.shiftKey ==false
			||String.fromCharCode(e.keyCode ) ==els[j].innerHTML && e.shiftKey ==true ){
			// el.removeChild(els[0]);
			els[j].style.background = 'white';
			els[j].style.color = 'black';
			j++;
			kaiguan = true;
		}else{
			return;
		}
		// if(el.firstElementChild == null){
		// 	location.reload();
		// }
		if(j>=52){
			a= a -1;
			clearInterval(timerId);
			score.style.display = 'block';
			sj_time.innerHTML = '最终用时为' + a+'秒';
			if(a<=30){sj_pingjia.innerHTML = '您的手速已经超神了!';sj_pingjia.style.color = '#E60303';return}
			if(a>30&&a<=40){sj_pingjia.innerHTML = '您的手速真的太快了!';sj_pingjia.style.color = '#EEF604';return}
			if(a>40&&a<=60){sj_pingjia.innerHTML = '您的手速挺正常的!';sj_pingjia.style.color = '#00F322';return}
			if(a>60){sj_pingjia.innerHTML = '您的手速还需要多练习!';sj_pingjia.style.color = '#6CB1AE'; return}
		}
		again.onclick = function(){
			score.style.display = 'none';
			location.reload();
		}
		
	}
	
	var timerId = setInterval(function(){
		if(kaiguan){
		time.innerHTML ='用时:'+a+'s';
		a++;
		}
	},1000)
	

	
	


	
	



	
	


























}