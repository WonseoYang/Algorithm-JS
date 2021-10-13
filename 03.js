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
  const list = {};
  for (let starter of participant) {
    if (!list[starter]) {
      list[starter] = 1;
    } else {
      list[starter] += 1;
    }
  }
  for (let finisher of completion) {
    if (list[finisher]) {
      list[finisher] -= 1;
    }
  }
  return Object.keys(list).find((name) => list[name] > 0);
}

console.log(solution(participant, completion));
