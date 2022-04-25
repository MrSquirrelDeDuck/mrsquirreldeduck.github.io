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

function findItem() {
    var textInput = document.getElementById("item_input").value;
    if (textInput == ""){
        document.getElementById("chestid").innerHTML = "Please put something in the text box.";
    }
    else {
	    try {
	    	/* let text_data = loadFile("resources/item_finder/items.txt");
	    	document.getElementById("chestid").innerHTML = text_data; */
		var fs = require('fs');
		var text_data = fs.readFileSync("resources/item_finder/items.txt", 'utf-8');
		var textByLine = text_data.split('\n')
            	console.log(text_data);
            	console.log(text_data.responseText);
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
