"use strict"

/* *** START Do not modify this section of code ***** */
document.getElementById("action").addEventListener("click", processForm);

function processForm() {
    let choice1 = document.getElementById("choice1").value;
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);

    let choice2 = document.getElementById("choice2").value;
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);

    let showOrigin = document.getElementById("origins").value == "yes";
    drawing.selectAll('svg>*').remove();
    
    makeDrawing(drawing, choice1, x1, y1, choice2, x2, y2, showOrigin)
}

let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/* *** END Do not modify this section of code ***** */

function makeDrawing (canvas, choice1, x1, y1, choice2, x2, y2, showOrigin) {

    let item1 = canvas.append("g");
    if (choice1 == "lion") {
        lion(item1, x1, y1, "normal", showOrigin);
    } else if (choice1 == "dog") {
        dog(item1, x1, y1, showOrigin, "normal");
    } else if (choice1 == "trumpeter") {
        trumpeter(item1, x1, y1, showOrigin, "normal");
    } else if (choice1 == "dog2") {
        drawDog(item1, x1, y1, showOrigin);
    }

    let item2 = canvas.append("g");
    if (choice2 == "lion") {
        lion(item2, x2, y2, "normal", showOrigin);
    } else if (choice2 == "dog") {
        dog(item2, x2, y2, showOrigin, "normal");
    } else if (choice2 == "trumpeter") {
        trumpeter(item2, x2, y2, showOrigin, "normal");
    } else if (choice2 == "dog2") {
        drawDog(item2, x2, y2, showOrigin);
    }

    switcheroo(item1, x1, y1, item2, x2, y2);
}

function switcheroo(i1, x1, y1, i2, x2, y2) {
    i1.transition().delay(500).duration(500).attr("transform", `translate(${x2-x1},${y2-y1})`);
    i2.transition().delay(500).duration(500).attr("transform", `translate(${x1-x2},${y1-y2})`);
}