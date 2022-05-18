const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = graphBuilder(edges)
  return hasPath(graph, nodeA, nodeB, new Set());
  
}

const graphBuilder = (edges) => {
  let graph = {};
  
  for (let nodes of edges){
    const [ nodeA, nodeB ] = nodes;
    if (!(nodeA in graph)) graph[nodeA] = [];
    graph[nodeA].push(nodeB)
    
    if (!(nodeB in graph)) graph[nodeB] = [];
    graph[nodeB].push(nodeA)
  }
  
  return graph;
}

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src)
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) return true;
  }
  return false;
}


















module.exports = {
  undirectedPath
};