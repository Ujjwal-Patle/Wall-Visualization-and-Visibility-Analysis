function visualizeWalls() {
    //Retrieve the number of walls from the input field and parse it as an integer, and also retrieve the wall heights from the input field, split by '#', and convert them to numbers.
    const numWalls = parseInt(document.getElementById('numWalls').value);
    const wallHeights = document.getElementById('wallHeights').value.split('#').map(Number);

    // Check if the number of wall heights entered matches the number of walls specified
    if (wallHeights.length !== numWalls) {
        alert('The number of wall heights entered does not match the number of walls specified.');
        return;
    }

    // Get the container element where walls will be displayed
    const wallContainer = document.getElementById('wallContainer');
    wallContainer.innerHTML = ''; // Clear previous walls


    for (const height of wallHeights) {
        const wall = document.createElement('div');// Create a new div element for each wall
        wall.className = 'wall'; // Assign a class for styling purposes
        wall.style.height = (height * 30) + 'px';// Set the height of the wall (multiplied by 30 for scaling)


        wallContainer.appendChild(wall);// Append the wall element to the container
    }

     // Calculate and display the number of visible walls from the left and right perspectives
    document.getElementById('visibleLeft').innerText = calculateVisibleWalls(wallHeights, 'left');
    document.getElementById('visibleRight').innerText = calculateVisibleWalls(wallHeights, 'right');
}

// Function to calculate the number of visible walls from a given direction ('left' or 'right')
function calculateVisibleWalls(heights, direction) {
    let vCount = 0;// Counter for visible walls
    let maxHig = 0;// Variable to keep track of the maximum height encountered

    if (direction === 'left') {
        for (const height of heights) {
            if (height > maxHig) {// If the current height is greater than the maximum height encountered
                vCount++;// Increment the visible walls count
                maxHig = height;//updating max height
            }
        }
    } else if (direction === 'right') {
        // Iterate over the heights from right to left by reversing the array
        for (const height of heights.slice().reverse()) {
            if (height > maxHig) {
                vCount++;
                maxHig = height;
            }
        }
    }
// Return the count of visible walls
    return vCount;
}
