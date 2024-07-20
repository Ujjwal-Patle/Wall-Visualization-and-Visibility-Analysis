function visualizeWalls() {
    const numWalls = parseInt(document.getElementById('numWalls').value);
    const wallHeights = document.getElementById('wallHeights').value.split('#').map(Number);

    if (wallHeights.length !== numWalls) {
        alert('The number of wall heights entered does not match the number of walls specified.');
        return;
    }

    const wallContainer = document.getElementById('wallContainer');
    wallContainer.innerHTML = ''; // Clear previous walls

    const maxHeight = Math.max(...wallHeights);

    for (const height of wallHeights) {
        const wall = document.createElement('div');
        wall.className = 'wall';
        wall.style.height = (height * 30) + 'px';

        wallContainer.appendChild(wall);
    }

    document.getElementById('visibleLeft').innerText = calculateVisibleWalls(wallHeights, 'left');
    document.getElementById('visibleRight').innerText = calculateVisibleWalls(wallHeights, 'right');
}


function calculateVisibleWalls(heights, direction) {
    let visibleCount = 0;
    let maxSeen = 0;

    if (direction === 'left') {
        for (const height of heights) {
            if (height > maxSeen) {
                visibleCount++;
                maxSeen = height;
            }
        }
    } else if (direction === 'right') {
        for (const height of heights.slice().reverse()) {
            if (height > maxSeen) {
                visibleCount++;
                maxSeen = height;
            }
        }
    }

    return visibleCount;
}
