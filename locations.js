function location1 (id, name, description){
	this.id = id;
	this.name = name;
	this.description = description;
	this.items = [];
}
var map = {
	locations: [],
	connections: [
	[0,1,0,0,0,0,0,0],
	[1,0,1,0,0,0,0,0],
	[0,1,0,1,1,1,1,0],
	[0,0,1,0,0,0,0,0],
	[0,0,1,0,0,0,0,0],
	[0,0,1,0,0,0,0,0],
	[0,0,1,0,0,0,0,1],
	[0,0,0,0,0,0,1,0]
	]
}


map.locations.push(new location1(0, 'Jail Cell', 'You are alone in a dark dirty jail cell.'));
map.locations.push(new location1(1, 'Dark Hallway', "Its pitch black. You can't see the end, if there is an end..."));
map.locations.push(new location1(2, 'Dark Room', 'You can barely see your hand as you raise it right in front of your face.'));
map.locations.push(new location1(3, 'Abandoned Armory', 'All around you are old weapons. Hopefully there is something to be salvaged here.'));
map.locations.push(new location1(4, 'Secret Room', "It appears that this room hasn't been visited for many years. There must be some ancient secret within."));
map.locations.push(new location1(5, 'Old Kitchen', "There's dirt everywhere. Only a true master could make a healthy meal here."));
map.locations.push(new location1(6, 'Guard Room', 'There are two guards on duty. There must be a way to get past them...'));
map.locations.push(new location1(7, 'Freedom', 'Just outside the sewer door you can see the sun and taste the fresh air.'));


function areConnected (currentLocId){
	for (var i = 0; i < map.locations.length; i++){
		if(map.connections[currentLocId][i] === 1){
			document.getElementById("feedback").innerHTML = "You are connected to " + map.locations[i].name);
			return true;
		}
		else
			return false;
	}
}
// Need to write this function
function hasItem (item){
		return true;
}
//write function
function removeItem(item){

}
//areConnected (2);
