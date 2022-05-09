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
