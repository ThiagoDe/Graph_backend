const longestPath = (graph) => {
  let max = 0;
  for (let node in graph){
    max = Math.max(max, explore(graph, node))
  }
  return max;
}
const explore = (graph, node) => {
  if (graph[node].length === 0) return 1;
  let edges = 0;
  for (let neighbor of graph[node]){
    edges += explore(graph, neighbor);
  }
  return edges;
}
