function loadFiles(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
    var fs = require("fs");
    var text = fs.readFileSync("resources/item_finder/items.txt").toString('utf-8');
    var textByLine = text.split("\n");
}

function downloadFile() {
	let response = fetch("resources/item_finder/items.txt");
		
	if(response.status != 200) {
		throw new Error("oops");
	}
		
	// read response stream as text
	let text_data = response.text();

	return text_data;
}

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
	    	let text_data = loadFile("resources/item_finder/items.txt");
	    	document.getElementById("chestid").innerHTML = text_data;
            /*  var txtFile = new XMLHttpRequest();  
            txtFile.open("GET", "./resources/item_finder/items.txt", true);
            document.getElementById("chestid").innerHTML = txtFile; */
            console.log(txtFile);
            console.log(txtFile.responseText);
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
