var floodFill = function(image, sr, sc, newColor) {
    const visited = new Set();
    const originalColor = image[sr][sc];
    return flood(image, sr, sc, originalColor, newColor, visited)
};

const flood = (image, sr, sc, originalColor, newColor, visited) => {
    const rowIn = sr >= 0 && sr < image.length;
    const colIn = sc >= 0 && sc < image[0].length;
    if (!rowIn || !colIn) return ;
    let pos = sr + ',' + sc;
    if (visited.has(pos)) return;
    visited.add(pos)
    
    if (image[sr][sc] === originalColor) {
    image[sr][sc] = newColor
    
    flood(image, sr + 1, sc, originalColor, newColor, visited);
    flood(image, sr - 1, sc, originalColor, newColor, visited);
    flood(image, sr, sc + 1, originalColor, newColor, visited);
    flood(image, sr, sc - 1, originalColor, newColor, visited);
    }
    return image;
}