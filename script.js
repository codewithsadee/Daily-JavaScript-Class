// audio play //
var buttonLength = document.querySelectorAll(".btn").length;

for ( var i = 0; i < buttonLength; i++){
	var multiSelect = document.querySelectorAll(".btn")[i];
	multiSelect.addEventListener("click", function(){
		var text = this.innerText;
		console.log(text);
		audioPlay(text);
	});
}

function audioPlay(play){
	switch(play){
		case"button 1":
			var sound = new Audio("./sounds/a.mp3");
			sound.play();
			break;
		case"button 2":
			var sound = new Audio("./sounds/b.mp3");
			sound.play();
			break;
		case"button 3":
			var sound = new Audio("./sounds/c.mp3");
			sound.play();
			break;
	}
}
