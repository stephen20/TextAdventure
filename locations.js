function location1 (name, description){
	this.name = name;
	this.description = description;
	this.items = [];
}
var map = {
	locations: [],
	connections: [[0,1,1],[1,0,1],[1,1,0]]
}

map.locations.push(new location1('Jail Cell', 'You are alone in a dark dirty jail cell.'));
map.locations.push(new location1('Abandoned Armory', 'All around you are old weapons.'));
map.locations.push(new location1('Secret Room', "It appears that this room hasn't been visited for many years"));

function areConnected (currentLoc){

	var locNum = map.locations.indexOf(currentLoc);

	for (var i = 0; i < 3; i++){
		if(map.connections[0][i] = 1)
			console.log('You are connected to ' + map.locations[i].name);
		else
			console.log('You are not connected to ' + map.locations[i].name);
	}

}

areConnected ('Jail Cell');
