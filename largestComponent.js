const largestComponent = (graph) => {
  const visited = new Set();
  let max = 0;
  
  for (let node in graph){
    max = Math.max(max, explore(graph, node, visited))
  }
  
  return max
}

const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));
  
  let count = 1;
  for (let neighbor of graph[node]){
    count += explore(graph, neighbor, visited)
  }
  return count;
}