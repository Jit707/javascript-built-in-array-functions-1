const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulator,students ) {
  return accumulator + students["score"]
}

let everageScore = students.reduce(getAverageStudentScore,0)
console.log(everageScore);
let totalEverageScore = everageScore/students.length
console.log(totalEverageScore);


 // Output: 87.5
