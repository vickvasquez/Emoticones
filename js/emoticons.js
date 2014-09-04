var emoticons = [
			'./img/emo/anger.PNG',
			'./img/emo/burn.PNG',
			'./img/emo/confused.PNG',
			'./img/emo/cool.PNG',
			'./img/emo/cry.PNG'
		];
var cont = document.getElementById('seleccionaste');
var dibujarem = function () {
	var template = document.getElementById('tpl-emo').textContent;
	var contenedor = document.getElementById('emoticon');
	for( var i=0; i<emoticons.length;i++){
		contenedor.innerHTML+=template.replace('<% url %>',emoticons[i])
	}
	seleccionarEmons();
}

var seleccionarEmons = function() {
	var emons = document.querySelectorAll('img');
	var input = document.getElementById('texto');

	for (var i = 0; i < emons.length; i++) {
		emons[i].addEventListener('click', function(){
			var emo = this;
			var src = emo.getAttribute('src');
			cont.innerHTML+= '<img src = '+ src +'>';
		})
	};
	
}

dibujarem();