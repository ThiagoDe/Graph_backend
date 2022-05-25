const semestersRequired = (numCourses, prereqs) => {
  let courses = {};
  let distance = {};
  for (let c = 0; c < numCourses; c ++){
    courses[c] = [];
  }
  
  for (let coursePre of prereqs){
    const [ a, b ] = coursePre;
    courses[b].push(a);
  }
  
  for (let i = 0; i < numCourses; i++ ){
    if(courses[i].length === 0) distance[i] = 1;
  }
  
  for (let i = 0; i < numCourses; i++) {
       traverse(courses, i, distance)
  }
  return Math.max(...Object.values(distance))
};

const traverse = (courses, course, distance) => {
  if (course in distance) return distance[course];
  
  let max = 0;
  for (let neighbor of courses[course]){
    max = Math.max(traverse(courses, neighbor, distance), max) 
  }
  distance[course] = 1 + max;
  return distance[course];
}





















module.exports = {
  semestersRequired
};