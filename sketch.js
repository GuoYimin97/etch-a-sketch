const containerWidth = 960;
const nsqrsDefault = 16;

// generate the default grid 16x16
gridWidth = containerWidth / nsqrsDefault;
const containerGrid = document.querySelector(".containerGrid");
for (i = 1; i <= nsqrsDefault; i++) {
    for (j = 1; j <= nsqrsDefault; j++) {
        const gridSqr = document.createElement("div");
        gridSqr.style.cssText = "height:" + gridWidth + "px; width:" + gridWidth + "px; background-color: white; outline:1px dashed rgb(160, 160, 160)";
        gridSqr.classList.add("gridSqrs");
        containerGrid.appendChild(gridSqr);
    }
}

// let the user define nsqrs and generate the grids accordingly
function askForGridperSide() {

    do {

        let nsqrs = Number(prompt("Please enter the number of grids per side:"));

        if (typeof nsqrs === "number"
            && nsqrs > 0 && nsqrs <= 100
            && Number.isInteger(nsqrs)) {

            const containerGrid = document.querySelector(".containerGrid");
            while (containerGrid.firstChild) {
                containerGrid.removeChild(containerGrid.firstChild);
            }

            gridWidth = containerWidth / nsqrs;
            for (i = 1; i <= nsqrs; i++) {
                for (j = 1; j <= nsqrs; j++) {
                    const gridSqr = document.createElement("div");
                    gridSqr.style.cssText = "height:" + gridWidth + "px; width:" + gridWidth + "px; background-color: white; outline:1px dashed rgb(160, 160, 160)";
                    gridSqr.classList.add("gridSqrs");
                    containerGrid.appendChild(gridSqr);
                }
            }
            break;

        } else {
            alert("Please try again and only enter a positive integer no greater than 100");
        }

    } while (!(typeof nsqrs === "number"
        && nsqrs > 0 && nsqrs <= 100
        && Number.isInteger(nsqrs)))


}

// change the square color when the mouse is clicked and held and the cursor hovers over the square 
function itchAndSketch() {

    const gridSqrs = document.querySelectorAll('.gridSqrs');
    let isMouseDown = true;

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    gridSqrs.forEach(div => {
        div.addEventListener('mouseover', () => {
            if (isMouseDown) {
                div.style.backgroundColor = getRandomColor();              
                
                // couldn't get the effect of increasingly darkening color, couldn't figure out why
                // div.style.backgroundColor = "black";
                // let currentOpacity = Number(div.style.opacity);
                // console.log("currentOpacity is " + currentOpacity);
                // if (currentOpacity < 1) { div.style.opacity = currentOpacity + 0.1; }
            }
        });
    });

    // });  

}

containerGrid.addEventListener('mouseover', itchAndSketch);

// clear the color of all grid squares
function clearCurrentSketch() {
    const gridSqrs = document.querySelectorAll('.gridSqrs');
    gridSqrs.forEach(div => {
        div.style.backgroundColor = 'white';
    });
}

