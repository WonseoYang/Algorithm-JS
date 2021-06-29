const arr = [1,2,3,3,3,3,4,4];
        const answer = [];
        
        function solution(arr) {
            const arrEx = new Array(Math.max.apply(null, arr)).fill(0);

            for(let i=0; i<arr.length; i++){
                arrEx[arr[i]-1]++;
            };

            const result = arrEx.filter(item => item>1);

            return arrEx.length == 0 ? -1 : result ;
        }

        console.log(solution(arr));