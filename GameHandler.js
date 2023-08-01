generateButtonsDiv();
generateCustomGridButton();
generateClearGridButton();
generateDivGrid();

// Creates default 4x4 (16) grid; pass int to override size
function generateDivGrid(dflt= 16) {
    let divElement = document.createElement("div");
    divElement.id = "gridDiv";
    divElement.style.display = "grid";
    divElement.style.gridTemplateColumns = "repeat(" + dflt + ", auto)";
    divElement.style.gridTemplateRows = "repeat(" + dflt + ", auto)";
    divElement.style.border = "5px solid #590D22";

    document.getElementsByTagName("main")[0].appendChild(divElement);

    for (let i = 1; i <= dflt * dflt; i++) {
        let divElement = document.createElement("div");
        let divElementVal = document.createElement("p");
        divElementVal.innerText = "";
        divElement.id = "grid-" + i;
        divElement.setAttribute("class", "grid");
        divElementVal.style.width = "1em";
        divElementVal.style.height = "1em";
        document.getElementById("gridDiv").appendChild(divElement);

        let targetDiv = document.getElementById("grid-" + i);
        targetDiv.appendChild(divElementVal);
        targetDiv.addEventListener("mouseover", () => {

            if (targetDiv.style.backgroundColor === "")
                targetDiv.style.backgroundColor="black";

            if (targetDiv.style.opacity === "")
                targetDiv.style.opacity = "0.1";

            else if (targetDiv.style.opacity < 1.0)
                targetDiv.style.opacity = (parseFloat(targetDiv.style.opacity) + 0.1).toString();
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

// Parse user input and replace current grid size with input
function handleUserInput(){
    let response = Number.parseInt(prompt("Enter custom grid size (max: 100):"));

    while (Number.isNaN(response) || (response <= 0) || (response > 100))
        response = Number.parseInt(prompt("Invalid input.\nEnter custom grid size (max: 100):"));

    document.querySelectorAll(".grid").forEach((x) => x.remove());
    document.getElementById("gridDiv").remove();
    generateDivGrid(response);
}