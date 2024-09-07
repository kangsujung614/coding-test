function solution(brown, yellow) {
    var answer = [];
    for(let i= brown/2-1; i>=3; i--){
        if((brown+yellow)%i===0){
            let j = (brown+yellow)/i;
            if(i+j === (brown+4)/2){
                answer = [i, j];
                break;
            }
        }
    }
    return answer;
}