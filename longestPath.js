const longestPath = (graph) => {
  let distance = {};
  for (let node in graph){
    if (graph[node].length === 0) distance[node] = 0;
  }
  
  for (let node in graph){
    explore(graph, node, distance);
  }
  
  return Math.max(...Object.values(distance))
}

const explore = (graph, node, distance) => {
  if (node in distance) return distance[node];
  let max = 0;
  for (let neighbor of graph[node]){
    max = Math.max(explore(graph, neighbor, distance), max)
  }
  distance[node] = 1 + max;
  return distance[node];
}