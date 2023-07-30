generateCustomGridButton();
generateDivGrid();

// Creates default 4x4 (16) grid; pass int to override size
function generateDivGrid(dflt= 16) {
    let divElement = document.createElement("div");
    divElement.setAttribute("id", "gridDiv");
    divElement.style.display = "grid";
    divElement.style.gridTemplateColumns = "repeat(" + dflt + ", 1fr)";
    divElement.style.gridTemplateRows = "repeat(" + dflt + ", 1fr)";
    document.getElementsByTagName("main")[0].appendChild(divElement);

    for (let i = 1; i <= dflt * dflt; i++) {
        let divElement = document.createElement("div");
        let divElementVal = document.createElement("p");
        divElementVal.innerText = String(i);
        divElement.setAttribute("id", "grid-" + i);
        divElement.setAttribute("class", "grid");
        document.getElementById("gridDiv").appendChild(divElement);
        document.getElementById("grid-" + i).appendChild(divElementVal);
    }
}

// Creates "Create Custom Grid" button & handler
function generateCustomGridButton() {
    let divElement = document.createElement("div");
    divElement.setAttribute("id", "custom-grid-div");
    document.getElementsByTagName("main")[0].appendChild(divElement);

    let buttonElement = document.createElement("button");
    buttonElement.setAttribute("id", "custom-grid-button");
    buttonElement.textContent = "Create Custom Grid";
    let customGridDivElement = document.getElementById("custom-grid-div");
    customGridDivElement.appendChild(buttonElement);
    customGridDivElement.addEventListener("click", () => handleUserInput());
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