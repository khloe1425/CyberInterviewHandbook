const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];
let container = document.getElementById("colorContainer");
loadColorPick = ()=>{
    for (let i = 0; i < colorList.length; i++) {

        if(i==0){
            container.innerHTML += "<button class='color-button "+colorList[i]+" active'></button>";
        }else{
            container.innerHTML += "<button class='color-button "+colorList[i]+"'></button>";
        }
      
    }
}
loadColorPick();

let colorPicker = document.getElementsByClassName("color-button");
let house = document.getElementById('house');
console.log(colorPicker);

for (let i = 0; i < colorPicker.length; i++) {
	colorPicker[i].addEventListener("click", function () {
		changeColor(colorList[i], i);
	});
}

changeColor = (color, currentClick) => {
    // debugger;
	for (let i = 0; i < colorPicker.length; i++) {
		colorPicker[i].classList.remove("active");
	}
	colorPicker[currentClick].classList.add("active");    
    house.className = "house " + color;
};
