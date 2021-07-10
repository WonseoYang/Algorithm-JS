/* jshint esversion: 6*/

// let N = 11;
// let N = 9;
let N = 1041;
// let N = 15;



function solution(N) {
    let tmp = [];//이진수를 저장할 배열
    let answer = [];

    while(true){//tmp에 이진수를 담음
        if(N==0){
            break;
        }else if((N%2)==0){
            tmp.unshift(0);
        }else if((N%2) == 1||N==1){
            tmp.unshift(1);
        }

        N = parseInt(N/2);
    }
    
    let i = 0;

    if(!(tmp.includes(1, i)&&tmp.includes(1, i+1))){
    //tmp의 배열 안에 1을 가진 수가 두 곳에 위치하지 않으면 출력할 값을 0으로
        answer.push(0);
        return parseInt(answer.join());
        }else{
            while(true){
                
                let start = tmp.indexOf(1, i);
                let end = tmp.indexOf(1, start+1);
                answer.push((end-start)-1);
                i++;
                if(!(tmp.includes(1, i+1))){
                    break;
                }
            }
            answer = Math.max(...answer);
            return answer;
        }
}

console.log(solution(N));