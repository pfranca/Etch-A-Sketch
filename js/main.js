var BLOCKS_PER_SIDE = 32;

function generateChart() {
  let container = document.getElementById('board');
  let pixel;  // used in the for loop

  let pixelSize = (700/BLOCKS_PER_SIDE) - 0.2;

  for(var i = 0; i < (BLOCKS_PER_SIDE*BLOCKS_PER_SIDE); i++) {
    pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.setAttribute("style","width: "+ pixelSize+"px; height:"+ pixelSize+"px;");
    container.append(pixel);
  }
}

generateChart();

const pixels = document.querySelectorAll(".pixel");
console.log(pixels);
pixels.forEach(function(pixel) {
    pixel.addEventListener("mouseover", function( event ) {   
        // highlight the mouseover target
        event.target.style.backgroundColor = "orange";
    });
});

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {   
    pixels.forEach(function(pixel) {
        pixel.style.backgroundColor = "#c4dfe6";
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const colorize = document.getElementById("color");
colorize.addEventListener("click", () => {   
    overideEventListener();
});

function overideEventListener(){
    pixels.forEach(function(pixel) {
        pixel.addEventListener("mouseover", function( event ) {   
            // highlight the mouseover target
            event.target.style.backgroundColor = getRandomColor();
        });
    });
}