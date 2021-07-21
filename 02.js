// case 1
let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];

// case 2
// let n = 5;
// let lost = [2,4];
// let reserve = [3];

// case 3
// let n = 3;
// let lost = [3];
// let reserve = [1];

function solution(n, lost, reserve) {
  const tmp = new Array(n).fill(1); // 전부 1로 채우고
  for (let i = 0; i < lost.length; i++) {
    // 잃어버린 애들은 0으로
    tmp[lost[i] - 1] = 0;
  }
  for (let i = 0; i < reserve.length; i++) {
    // 여분 있는 애들 1 더해주고
    tmp[reserve[i] - 1]++;
  }
  for (let i = 0; i < tmp.length; i++) {
    // tmp를 돌며
    if (tmp[i] == 0 && tmp[i - 1] > 1) {
      // 0을 발견하였는데 이전 값이 1보다 크다면(여벌이 있다면)
      tmp[i]++; // 현재 값을 올리고
      tmp[i - 1]--; // 이전 값을 내린다
    } else if (tmp[i] == 0 && tmp[i + 1] > 1) {
      // 위와 반대로 뒷 값이 1보다 큰 경우
      tmp[i]++;
      tmp[i + 1]--;
    }
  }
  const answer = tmp.filter((num) => num > 0).length; // tmp를 filter 하며 0이 넘어가는 애들(체육복이 있거나 여벌이 있는 애들)만 걸러 그 길이를 담아 반환
  return answer;
}

console.log(solution(n, lost, reserve));
