let Count = 0;
let scores = [35, 92, 67, 45, 89, 22, 95, 50, 40, 78];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 40) {
    scores[i] =scores[i]+ 20; 
  }
  if (scores[i] > 90) {
    scores[i] = 90; 
  }
  if (scores[i] >= 50) {
    Count++;
  }
}



console.log("Adjusted Scores:", scores);
console.log("Number of Students Passed:",Count);
