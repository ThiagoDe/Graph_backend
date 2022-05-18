const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]){
    if (hasPath(graph, neighbor, dst)) return true
  }
  return false;
}

const hasPath2 = (graph, src, dst) => {
  const queue = [ src ]
  
  while (queue.length > 0){
    const current = queue.shift();
    
    for (let neighbor of graph[current]){
      if (neighbor === dst) return true;
      queue.push(neighbor);
    }
  }
  
  return false;
}
