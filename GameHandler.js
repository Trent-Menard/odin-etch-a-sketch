generateButtonsDiv();
generateCustomGridButton();
generateClearGridButton();
generateDivGrid();

let rainbowMode = false;

// Creates default 4x4 (16) grid; pass int to override size
function generateDivGrid(dflt= 16) {
    let divElement = document.createElement("div");
    divElement.id = "gridDiv";
    divElement.style.display = "grid";
    divElement.style.gridTemplateColumns = "repeat(" + dflt + ", 1fr)";
    divElement.style.gridTemplateRows = "repeat(" + dflt + ", 1fr)";
    divElement.style.width = "90vh";
    divElement.style.height = "90vh";
    divElement.style.border = "5px solid #590D22";
    divElement.style.color = ""
    document.getElementsByTagName("main")[0].appendChild(divElement);

    for (let i = 1; i <= dflt * dflt; i++) {
        let divElement = document.createElement("div");
        divElement.id = "grid-" + i;
        divElement.style.margin = "0";
        divElement.setAttribute("class", "grid");

        document.getElementById("gridDiv").appendChild(divElement);
        divElement.addEventListener("mouseover", () => {

            if (rainbowMode) {
                divElement.style.backgroundColor = getRainbowRandomColor();
                divElement.style.opacity="";
            }

            else {
                if (divElement.style.backgroundColor === "" || divElement.style.backgroundColor !== "black") {
                    divElement.style.backgroundColor = "black";
                    divElement.style.opacity = "0.1";
                }

                else if (divElement.style.opacity < 1.0 && divElement.style.backgroundColor === "black") // Essentially divElement.style.opacity += 0.1;
                    divElement.style.opacity = (parseFloat(divElement.style.opacity) + 0.1).toString();
            }
        });
    }
}

// Creates "buttons-div"
function generateButtonsDiv() {
    let divElement = document.createElement("div");
    divElement.setAttribute("id", "buttons-div");
    document.getElementsByTagName("main")[0].appendChild(divElement);
}

// Creates "Create Custom Grid" button & handler
function generateCustomGridButton() {
    let buttonElement = document.createElement("button");
    buttonElement.setAttribute("id", "custom-grid-button");
    buttonElement.textContent = "Create Custom Grid";

    let buttonsDivElement = document.getElementById("buttons-div");
    buttonsDivElement.appendChild(buttonElement);

    document.getElementById("custom-grid-button").addEventListener("click", () => handleUserInput());
}

// Creates "Clear Grid" button & handler
function generateClearGridButton() {
    let buttonElement = document.createElement("button");
    buttonElement.setAttribute("id", "clear-grid-button");
    buttonElement.textContent = "Clear Grid";

    let buttonsDivElement = document.getElementById("buttons-div");
    buttonsDivElement.appendChild(buttonElement);

    document.getElementById("clear-grid-button").addEventListener("click", () => {
        document.querySelectorAll(".grid").forEach((x) => x.removeAttribute("style"));
    });
}

let buttonElement = document.createElement("button");
buttonElement.setAttribute("id", "rainbow-mode-button");
buttonElement.textContent = "Enable Rainbow Mode";

let buttonsDivElement = document.getElementById("buttons-div");
buttonsDivElement.appendChild(buttonElement);

let rainbowModeButton = document.getElementById("rainbow-mode-button");
rainbowModeButton.addEventListener("click", () => {

    if (!rainbowMode) {
        rainbowModeButton.textContent = "Disable Rainbow Mode";
        rainbowMode = true;
    }

    else {
        rainbowModeButton.textContent = "Enable Rainbow Mode";
        rainbowMode = false;
    }
});

// Parse user input and replace current grid size with input
function handleUserInput(){
    let response = Number.parseInt(prompt("Enter custom grid size (max: 100):"));

    while (Number.isNaN(response) || (response <= 0) || (response > 100))
        response = Number.parseInt(prompt("Invalid input.\nEnter custom grid size (max: 100):"));

    document.querySelectorAll(".grid").forEach((x) => x.remove());
    document.getElementById("gridDiv").remove();
    generateDivGrid(response);
}

function getRainbowRandomColor() {
    let choices = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    return choices[Math.floor(Math.random() * choices.length)];
}