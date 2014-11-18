var player = {
	name: "",
	profession: "",
	items: []
};
player.pickUp = function(item){
	this.player.items.push(item);
	return items;
}
player.drop = function(item){
	var indexNum = this.player.items.indexOf(item);
	if (indexNum >= 0){
		//drop item
		this.player.items.splice(indexNum,1)
	}
	else{
		//print you don't have this item
		//wherever I put it in HTML part .innerHTML = "You don't have this item!";
	}
	return items;
}

var interpret = function(string){

}

var execute = function(player){

}
var report = function(){

}

var gameStep = funciton(string){

}

var gameStart = function(){

}

window.addEventListener("load", gameStart());
