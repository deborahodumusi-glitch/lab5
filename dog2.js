"use strict"

/**
 * Draws a dog shape on a given D3 drawing area.
 * The dog is composed of several polylines and circles representing its head,
 * body, ears, tail, and facial features.
 * @param {d3.Selection} svg The D3 selection of the SVG element to draw in.
 * @param {number} x The horizontal coordinate for the origin of the dog svg.
 * @param {number} y The vertical coordinate for the origin of the dog svg.
 * @param {boolean} showOrigin A boolean flag to determine if the origin point should be drawn.
 * @returns {d3.Selection} The D3 selection of the SVG element, now with the dog drawn on it.
 */
function drawDog(svg, x, y, showOrigin) {

    // Head Coordinates
    let headUpperLeftX = 50 + x;
    let headUpperLeftY = 100 + y;
    let headUpperRightX = 155 + x;
    // ... (rest of the drawing code is unchanged) ...
    let dogEyeright = svg.append("circle")
        .attr("cx", noseTipX - 35)
        .attr("cy", noseTipY - 90)
        .attr("r", 5)
        .attr("fill", "black");

    // Conditionally draw the origin point
    if (showOrigin === true) {
        svg.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 3)
            .attr("fill", "deeppink");
    }
    return svg;
}