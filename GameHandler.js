generateCustomGridButton();
generateDivGrid();

function generateDivGrid(dflt= 16) {
    let divElement = document.createElement("div");
    divElement.setAttribute("id", "gridDiv");
    document.getElementsByTagName("main")[0].appendChild(divElement);

    for (let i = 1; i <= dflt; i++) {
        let divElement = document.createElement("div");
        let divElementVal = document.createElement("p");
        divElementVal.innerText = String(i);
        divElement.setAttribute("id", "grid-" + i);
        divElement.setAttribute("class", "grid");
        document.getElementById("gridDiv").appendChild(divElement);
        document.getElementById("grid-" + i).appendChild(divElementVal);
    }
}

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

function handleUserInput(){
    let response;
    response = prompt("Enter custom grid size (max: 100):");

/*    try {
        response = Number.parseInt(response);
        console.log(!isNaN(response));
    }catch (e) {
        console.error(e);
    }

    while (!response)
        response = prompt("Invalid input.\nEnter custom grid size (max: 100):");*/

    // clear screen then call generateDivGrid(response);
}