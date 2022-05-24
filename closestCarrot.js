const closestCarrot = (grid, startRow, startCol) => {
 
  const queue = [ [startRow, startCol, 0] ];
  const visited = new Set([startRow + ',' + startCol])
  
  while (queue.length > 0){
    let [r, c, distance] = queue.shift();
    if (grid[r][c] === 'C') return distance;
    const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let delta of deltas){
      
      let [rDelta, cDelta] = delta;
      let newR = rDelta + r;
      let newC = cDelta + c;
      const pos = newR + ',' + newC;
      const rowInbounds = newR >= 0 && newR < grid.length;
      const colInbounds = newC >= 0 && newC < grid[0].length;
      
      if (rowInbounds && colInbounds && !visited.has(pos) && grid[newR][newC] !== 'X'){
        visited.add(pos);
        queue.push([newR, newC, distance + 1])
      }
    }
  }
  return - 1;
};

























module.exports = {
  closestCarrot
};