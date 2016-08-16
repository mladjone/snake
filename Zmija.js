var timer;
var inter = 500;
var c = 4;
var r = 4;
var x = 0;
var y = 0;
var xt = 0;
var yt = 0;
var pos = [];
var niz = [];
var score = 0;
for (var i = 0; i < 9; i++){
	pos.push([]);
	for(var j = 0; j < 9; j++){
		pos[i].push(document.getElementById("tabela").rows[i].cells[j]);
	}
}

window.onload = function() {
	randomPick();
};

function randomPick(){
	do {
		x = Math.floor((Math.random() * 9));
		y = Math.floor((Math.random() * 9));
	} while( pos[x][y].style.background === 'red' || (x === xt && y===yt) );
	xt = x;
	yt = y;
	pos[x][y].style.background = 'orange';
}

function goRight(){
	for (var s = score; s > 0; s--){
		niz[s] = niz[s-1];
	}
	niz[0] = pos[r][c];

	c = (c < pos[r].length-1)? c+1 : 0;

	if (pos[r][c].style.background === 'red'){
		document.getElementById("demo").style.display = 'block';
		document.getElementById("playerScore").innerHTML = score;
		clearInterval(timer);
	}
	
	if (pos[r][c].style.background === 'orange'){
		score = score + 1;
		inter = inter - 10;
		randomPick();
	}

   	for (var k=0; k< pos[r].length; k++){
   		for (var t=0; t< pos[r].length; t++){
			pos[k][t].style.background = 'green';   			
   		}
   	}
   	pos[r][c].style.background = 'red';

   	pos[x][y].style.background = 'orange';

   	for (s = score; s > 0; s--){
   		niz[s-1].style.background = 'red';
   	}
}

function goLeft(){
	for (var s = score; s > 0; s--){
		niz[s] = niz[s-1];
	}
	niz[0] = pos[r][c];

	c = (c > 0)? c-1 : pos[r].length-1;

	if (pos[r][c].style.background === 'red'){
		document.getElementById("demo").style.display = 'block';
		document.getElementById("playerScore").innerHTML = score;
		clearInterval(timer);
	}

	if (pos[r][c].style.background === 'orange'){
		score = score + 1;
		inter = inter - 10;
		randomPick();
	}

   	for (var k=0; k< pos[r].length; k++){
   		for (var t=0; t< pos[r].length; t++){
			pos[k][t].style.background = 'green';   			
   		}
   	}
   	pos[r][c].style.background = 'red';

   	pos[x][y].style.background = 'orange';

   	for (s = score; s > 0; s--){
   		niz[s-1].style.background = 'red';
   	}
}

function goDown(){
	for (var s = score; s > 0; s--){
		niz[s] = niz[s-1];
	}
	niz[0] = pos[r][c];

	r = (r < pos[c].length-1)? r+1 : 0;

	if (pos[r][c].style.background === 'red'){
		document.getElementById("demo").style.display = 'block';
		document.getElementById("playerScore").innerHTML = score;
		clearInterval(timer);
	}

	if (pos[r][c].style.background === 'orange'){
		score = score + 1;
		inter = inter - 10;
		randomPick();
	}

   	for (var k=0; k< pos[r].length; k++){
   		for (var t=0; t< pos[r].length; t++){
			pos[k][t].style.background = 'green';   			
   		}
   	}
   	pos[r][c].style.background = 'red';

   	pos[x][y].style.background = 'orange';

   	for (s = score; s > 0; s--){
   		niz[s-1].style.background = 'red';
   	}
}

function goUp(){
	for (var s = score; s > 0; s--){
		niz[s] = niz[s-1];
	}
	niz[0] = pos[r][c];

	r = (r > 0)? r-1 : pos[c].length-1;

	if (pos[r][c].style.background === 'red'){
		document.getElementById("demo").style.display = 'block';
		document.getElementById("playerScore").innerHTML = score;
		clearInterval(timer);
	}

	if (pos[r][c].style.background === 'orange'){
		score = score + 1;
		inter = inter - 10;
		randomPick();
	}

   	for (var k=0; k< pos[r].length; k++){
   		for (var t=0; t< pos[r].length; t++){
			pos[k][t].style.background = 'green';   			
   		}
   	}
   	pos[r][c].style.background = 'red';

   	pos[x][y].style.background = 'orange';

   	for (s = score; s > 0; s--){
   		niz[s-1].style.background = 'red';
   	}
}

document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == '39') {
       	clearInterval(timer);
       	timer = setInterval(goRight, inter);
    } else if (e.keyCode == '37') {
    	clearInterval(timer);
       	timer = setInterval(goLeft, inter);
    } else if (e.keyCode == '40') {
       	clearInterval(timer);
       	timer = setInterval(goDown, inter);
    } else if (e.keyCode == '38') {
    	clearInterval(timer);
       	timer = setInterval(goUp, inter);
    }
};