function player (name){
	this.name: name,
	this.currentLoc = 'Jail Cell';
	this.items: [],
	this.health: 100
};

player.pickUp = function(item){
	if (this.location.hasItem(item) === true){
		this.player.items.push(item);
		this.location.removeItem(item);
	}
	else
		//alert('That item isn\'t in this room!');
		document.getElementById("feedback").innerHTML = "That item isn't in this room!";
}
player.drop = function(item){
	var indexNum = this.player.items.indexOf(item);
	if (indexNum >= 0){
		//drop item
		this.player.items.splice(indexNum,1)
	}
	else{
		//print you don't have this item
		//alert('You don\'t have this item!');
		document.getElementById("feedback").innerHTML = "You don't have this item!";

	}
}
player.go = function(locName) {
    var locNum = locName.id; // set this to be the index of the new location
    if (locNum >= 0 && locNum < 8)// check whether the desired location is in the list of locations in the map
        if (this.player.location.id === locNum)// check if the player is already at the location they asked for
            alert('You are already in that room!');// display feedback indicating the player is already here
        else if(areConnected(locNum) === true)// otherwise check if the desired location is connected to the current location
            this.player.location = locName;// if so, set the current location to be the new location
            // or... you might first perform other checks, like whether the player has the required items
        // otherwise
         else if(areConnected === false)
         	alert ('You can\'t get to that location from here!');// display feedback indicating that the new location is not reachable from the current location
    else// otherwise
    	alert('That location does not exist in this universe!');    // display feedback indicating that it is not a valid location
};

player.use = function(item) {
    // check first that the user has the item
        // then "use" the item... what this means or how it works depends on your game
    // otherwise
        // display feedback indicating that the player doesn't have this item
}
