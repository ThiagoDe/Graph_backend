//  const dfp = (graph, src) => {
//      const stack = [ src ]

//      while (stack.length > 0) {
//          const current = stack.pop();

//          for (let neighbor of graph[current]){
//              stack.push(neighbor);
//          }
//      }
//  }

const dft = (graph, src) => {
   for (neighbor of graph[src]) {
       dft(graph, neighbor)
   }
}

const bft = (graph, src) => {
    const queue = [ src ];

    while (queue.length > 0){
        const current = queue.shift();

        for ( let neighbor of graph[current]){
            queue.push(current)
        }
    }
}