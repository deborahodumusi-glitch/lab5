"use strict"

/**
 * Draws a lion face on a given SVG canvas.
 * The lion's origin point is the center of its main head.
 * The drawing includes a mane, ears, head, muzzle, facial features, and whiskers.
 * It also has a conditional "winking" feature.
 *
 * @param {object} canvas The D3 SVG object to draw on.
 * @param {number} x The horizontal (x-coordinate) for the center of the lion's head.
 * @param {number} y The vertical (y-coordinate) for the center of the lion's head.
 * @param {string} mode A string that controls a special feature ('winking' or 'normal').
 * @param {boolean} showOrigin If true, a marker will be drawn at the origin point (x, y).
 * @returns {object} The modified SVG canvas with the lion drawing appended.
 */
function lion(canvas, x, y, mode, showOrigin) {
    
    // Drawing the big mane first so it sits behind the face
    let mane = canvas.append('ellipse')
        .attr('cx', x)
        .attr('cy', y + 25)
        .attr('rx', 175)
        .attr('ry', 190)
        .attr('fill', '#A0522D');

    // Ears go next, positioned relative to the center x, y
    let leftEar = canvas.append('ellipse')
        .attr('cx', x - 100) // 100 pixels to the left
        .attr('cy', y - 100) // 100 pixels up
        .attr('rx', 50)
        .attr('ry', 50)
        .attr('fill', '#CD853F');

    let rightEar = canvas.append('ellipse')
        .attr('cx', x + 100) // 100 pixels to the right
        .attr('cy', y - 100)
        .attr('rx', 50)
        .attr('ry', 50)
        .attr('fill', '#CD853F');

    // The main face circle
    let head = canvas.append('ellipse')
        .attr('cx', x)
        .attr('cy', y)
        .attr('rx', 150)
        .attr('ry', 150)
        .attr('fill', '#CD853F');

    // Muzzle parts (the lighter circles on the cheeks)
    let leftMuzzle = canvas.append('ellipse')
        .attr('cx', x - 25)
        .attr('cy', y + 75)
        .attr('rx', 45)
        .attr('ry', 45)
        .attr('fill', '#F4A460');

    let rightMuzzle = canvas.append('ellipse')
        .attr('cx', x + 25)
        .attr('cy', y + 75)
        .attr('rx', 45)
        .attr('ry', 45)
        .attr('fill', '#F4A460');

    /* Facial Features */
    let leftEye = canvas.append('ellipse')
        .attr('cx', x - 25)
        .attr('cy', y + 10)
        .attr('rx', 15)
        .attr('ry', 15)
        .attr('fill', 'black');

    // Checking if the user selected "winking" mode
    if (mode === "winking") {
        // Draw a line instead of a circle for the winking eye
        let winkingEye = canvas.append('line')
            .attr('x1', x + 10)
            .attr('y1', y + 10)
            .attr('x2', x + 40)
            .attr('y2', y + 10)
            .attr('stroke', 'black')
            .attr('stroke-width', 4);
    } else {
        // Otherwise just draw the normal open eye
        let rightEye = canvas.append('ellipse')
            .attr('cx', x + 25)
            .attr('cy', y + 10)
            .attr('rx', 15)
            .attr('ry', 15)
            .attr('fill', 'black');
    }
    
    // Using a polyline for the nose triangle
    // closedPolygon helper makes it easier to list the x,y points
    let nose = canvas.append('polyline')
        .attr('points', closedPolygon(x - 25, y + 50, x + 25, y + 50, x, y + 75))
        .attr('fill', 'black');

    // Mouth shape
    let mouth = canvas.append('polyline')
        .attr('points', closedPolygon(x - 20, y + 125, x + 20, y + 125, x + 10, y + 145, x - 10, y + 145))
        .attr('fill', 'black');

    /* Whiskers - just simple lines sticking out from the muzzle */
    let topLeftWhisker = canvas.append('line')
        .attr('x1', x - 100)
        .attr('y1', y + 65)
        .attr('x2', x - 40)
        .attr('y2', y + 60)
        .attr('stroke', 'black')
        .attr('stroke-width', 2);

    let bottomLeftWhisker = canvas.append('line')
        .attr('x1', x - 100)
        .attr('y1', y + 85)
        .attr('x2', x - 40)
        .attr('y2', y + 80)
        .attr('stroke', 'black')
        .attr('stroke-width', 2);

    let topRightWhisker = canvas.append('line')
        .attr('x1', x + 100)
        .attr('y1', y + 65)
        .attr('x2', x + 40)
        .attr('y2', y + 60)
        .attr('stroke', 'black')
        .attr('stroke-width', 2);

    let bottomRightWhisker = canvas.append('line')
        .attr('x1', x + 100)
        .attr('y1', y + 85)
        .attr('x2', x + 40)
        .attr('y2', y + 80)
        .attr('stroke', 'black')
        .attr('stroke-width', 2);

    // If the "Show Origin" box is checked, draw a little pink dot at the center (x,y)
    // This helps verify the positioning is correct
    if (showOrigin) {
        canvas.append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 3)
            .attr('fill', 'deeppink');
    }

    // Send back the canvas so more things can be added if needed
    return canvas;
}