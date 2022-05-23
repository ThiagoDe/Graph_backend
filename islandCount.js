const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  
  for (let r = 0; r < grid.length; r++){
    for (let c = 0; c < grid[0].length; c++){
    
      if (grid[r][c] === 'L'){     
        if ( islandTraverse(grid, r, c, visited)) count += 1
      }
    }
  }
  return count;
}

const islandTraverse = (grid, r, c , visited) => {
  const rowBound = r >= 0 && r < grid.length;
  const colBound = c >= 0 && c < grid[0].length;
  let pos = r + ',' + c;
  
  if (visited.has(pos)) return false;
  visited.add(pos);
  if (!rowBound || !colBound || grid[r][c] === 'W') return false;
 
  
  islandTraverse(grid, r + 1, c, visited);
  islandTraverse(grid, r - 1, c, visited);
  islandTraverse(grid, r, c + 1, visited);
  islandTraverse(grid, r, c - 1, visited);
  return true;
}























module.exports = {
  islandCount
};