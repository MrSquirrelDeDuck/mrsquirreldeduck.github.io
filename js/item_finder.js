function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function checkElement(elementText) {
  return elementText == document.getElementById("item_input").value;
}

function tickChest(chestid) {
    chest_list = document.getElementsByClassName(chestid);
    for (var i = 0; i < chest_list.length; i++) {
	if (chest_list[i].classList.contains("red")){
            chest_list[i].src = "resources/item_finder/chests/chest_red_ticked.png";
        }
	if (chest_list[i].classList.contains("orange")){
            chest_list[i].src = "resources/item_finder/chests/chest_orange_ticked.png";
        }
	if (chest_list[i].classList.contains("yellow")){
            chest_list[i].src = "resources/item_finder/chests/chest_yellow_ticked.png";
        }
	if (chest_list[i].classList.contains("green")){
            chest_list[i].src = "resources/item_finder/chests/chest_green_ticked.png";
        }
	if (chest_list[i].classList.contains("mblue")){
            chest_list[i].src = "resources/item_finder/chests/chest_medium_blue_ticked.png";
        }
	if (chest_list[i].classList.contains("lblue")){
            chest_list[i].src = "resources/item_finder/chests/chest_light_blue_ticked.png";
        }
	if (chest_list[i].classList.contains("dblue")){
            chest_list[i].src = "resources/item_finder/chests/chest_dark_blue_ticked.png";
        }
	if (chest_list[i].classList.contains("purple")){
            chest_list[i].src = "resources/item_finder/chests/chest_purple_ticked.png";
        }
	if (chest_list[i].classList.contains("pink")){
            chest_list[i].src = "resources/item_finder/chests/chest_pink_ticked.png";
        }
    }
}

function findItem() {
    var chest_red = "resources/item_finder/chests/chest_red.png";
    var chest_orange = "resources/item_finder/chests/chest_orange.png";
    var chest_yellow = "resources/item_finder/chests/chest_yellow.png";
    var chest_green = "resources/item_finder/chests/chest_green.png";
    var chest_mblue = "resources/item_finder/chests/chest_medium_blue.png";
    var chest_lblue = "resources/item_finder/chests/chest_light_blue.png";
    var chest_dblue = "resources/item_finder/chests/chest_dark_blue.png";
    var chest_purple = "resources/item_finder/chests/chest_purple.png";
    var chest_pink = "resources/item_finder/chests/chest_pink.png";

    var chest_red_ticked = "resources/item_finder/chests/chest_red_ticked.png";
    var chest_orange_ticked = "resources/item_finder/chests/chest_orange_ticked.png";
    var chest_yellow_ticked = "resources/item_finder/chests/chest_yellow_ticked.png";
    var chest_green_ticked = "resources/item_finder/chests/chest_green_ticked.png";
    var chest_mblue_ticked = "resources/item_finder/chests/chest_medium_blue_ticked.png";
    var chest_lblue_ticked = "resources/item_finder/chests/chest_light_blue_ticked.png";
    var chest_dblue_ticked = "resources/item_finder/chests/chest_dark_blue_ticked.png";
    var chest_purple_ticked = "resources/item_finder/chests/chest_purple_ticked.png";
    var chest_pink_ticked = "resources/item_finder/chests/chest_pink_ticked.png";
	
    var textInput = document.getElementById("item_input").value;
    if (textInput == ""){
        document.getElementById("chestid").innerHTML = "Please put something in the text box.";
    }
    else {
	    try {
	    	let text_data = loadFile("resources/item_finder/items.txt");
		const item_list = text_data.split("\n");
		let text_data_2 = loadFile("resources/item_finder/chest_id.txt");
		const id_list = text_data_2.split("\n");
		if (item_list.includes(textInput)) {
		    chest_id = id_list[parseInt(item_list.findIndex(checkElement),10)];
		    if (chest_id != -1) {
		    	document.getElementById("chestid").innerHTML = "Chest id: " + chest_id;
			tickChest(chest_id);
		    } else {
			document.getElementById("chestid").innerHTML = "Item is not obtainable in-game."
		    }
		} else {
		    document.getElementById("chestid").innerHTML = "Item does not exist or is not in the list."
		}
	    }
	    catch(e) {
	    	alert(e.message);
	    }
    }
}
function loadScript() {
    document.getElementById("item_input").value = ""
    document.getElementById("background_image").selectedIndex = 0
}

function changeBackground() {
    if (document.getElementById("background_image").selectedIndex == 0) {
        document.body.style.backgroundImage = "url('resources/item_finder/terraria_forest.jpg')"; 
    }
    if (document.getElementById("background_image").selectedIndex == 1) {
        document.body.style.backgroundImage = "url('resources/item_finder/terraria_desert.jpg')"; 
    }
        if (document.getElementById("background_image").selectedIndex == 2) {
        document.body.style.backgroundImage = "url('resources/item_finder/terraria_jungle.jpg')"; 
    }
    if (document.getElementById("background_image").selectedIndex == 3) {
        document.body.style.backgroundImage = "url('resources/item_finder/terraria_corruption.jpg')"; 
    }
        if (document.getElementById("background_image").selectedIndex == 4) {
        document.body.style.backgroundImage = "url('resources/item_finder/terraria_underworld.jpg')"; 
    }
}
