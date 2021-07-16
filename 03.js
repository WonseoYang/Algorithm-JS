/* jshint esversion: 6 */

// case 1
let participant = ['leo', 'kiki', 'eden'];
let completion = ['eden', 'kiki'];

// case 2
// let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// let completion = ["josipa", "filipa", "marina", "nikola"];

// case 3
// let participant = ["mislav", "stanko", "mislav", "ana"];
// let completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      const answer = participant[i];
      return answer;
    }
  }
}

console.log(solution(participant, completion));
