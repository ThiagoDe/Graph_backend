const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let counter = 0;
  
  for (let node in graph){
    if (explore(graph, node, visited)) counter += 1;
  }
  return counter;
}

const explore = (graph, node, visited) => {
  
  if (visited.has(String(node))) return false;
  visited.add(String(node));
  
  for (let neighbor of graph[node]) {
    explore(graph, neighbor, visited)
  }
  return true;
}


















module.exports = {
  connectedComponentsCount
};