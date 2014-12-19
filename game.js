function interpret(input) {
    var cmd = {}, tokens = input.trim().toLowerCase().split(" ");
    cmd.action = tokens.shift();
    cmd.target = tokens.join(" ");
    return cmd;
}
function execute(command) {
    player[command.action](command.target);
}
function report(result) { // note: parameter not currently used
    displayActions();
    displayInventory();
    displayScene();
}
function gameStep(string){
	var cmd = interpret(input); // parse the user input
    var result = execute(cmd); // run the desired command
    report(result); // display the results on the screen
}

function gameStart() {
    var inputBox = document.querySelector("input");
    inputBox.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            gameStep(this.value);
        }
  	});
  	document.getElementById("descrip").innerHTML = "You see something shiny in the dirt below you.");
  	document.getElementById("feedback").innerHTML = "Possible actions: Pick up, Look");
}
function displayInventory() {
    var i, item, inventory;
    inventory = document.querySelector("#inventory > ul");
    clearContent(inventory);
    for (i in player.items) {
        item = document.createElement ("li");
        item.textContent = player.items[i];
        inventory.appendChild(item);
    }
}
function displayScene() {

}
function clearContent(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}
function readInfo (){
	var inputBox, inputStr;
  	inputBox = document.getElementById("action");
  	inputStr = inputBox.value;
  	return inputStr;
}
function gameIntro() {
    var inputBox = document.getElementById("action");
    inputBox.addEventListener ("keyup", listener);
    var listener = function(event) {
        if (event.keyCode === 13) {
            // remove this listener before continuing so it only runs once
            event.target.removeEventListener("keyup", listener);
            player(this.value);
            gameStart();
        }
    };
}
window.onload = gameIntro;
