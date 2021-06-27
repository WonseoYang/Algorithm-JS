/* jshint esversion: 6*/
/* 부스트캠프 */
let param0 = ["/a/a_v2.x",

"/b/a.x",
"/c/t.z",
"/d/a/t.x",
"/e/z/t_v1.z",
"/k/k/k/a_v9.x"];

// let param0 = ["/t.z",
// "/b/b.z",
// "/a.z",
// "/e/k.z",
// "/d/a/x_v2.z"];

function solution(param0) {

    let fileList = [];//앞으로의 파일명을 저장할 배열 변수

    // for(key in param0){//돌며 디렉토리 명들을 분류하여 끝에 파일 명만 파일명 배열 변수에 저장
    //     fileList[key] = param0[key].split("/").pop();
    //     //중간 버전 명 존재하면 제거
    //     if(fileList[key].slice(fileList[key].indexOf("_"), fileList[key].indexOf("."))){
    //         let [fileFixedName, fixedFileName2] = fileList[key].split(fileList[key].slice(fileList[key].indexOf("_"), fileList[key].indexOf(".")));
    //         fixedFileName = fileFixedName + fixedFileName2;
    //         fileList[key] = fixedFileName;
    //     }
    // }

    param0.forEach((item, index)=>{
        fileList[index] = item.split("/").pop();
        if(fileList[index].slice(fileList[index].indexOf("_"), fileList[index].indexOf("."))){
                    let [fileFixedName, fixedFileName2] = fileList[index].split(fileList[index].slice(fileList[index].indexOf("_"), fileList[index].indexOf(".")));
                    fixedFileName = fileFixedName + fixedFileName2;
                    fileList[index] = fixedFileName;
        }
    });

    fileList.sort((a,b)=>a-b);
    const answer = [];
    let cnt;

    fileList.forEach(key => {
        cnt = fileList.filter(x => x==key).length;
        if(!answer.includes(key) && cnt > 1){
        answer.push(key);
        answer.push(cnt);
        }
    });
    
    return answer.length == 0 ? [] : answer;

}

console.log(solution(param0));