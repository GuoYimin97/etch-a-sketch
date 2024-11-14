const containerWidth = 960;

// now let the user define nsqrs
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
                        gridSqr.style.cssText = "height:"+ gridWidth + "px; width:"+ gridWidth + "px; background-color: white; outline:1px dashed rgb(160, 160, 160)";
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


// console.log(nsqrs); 