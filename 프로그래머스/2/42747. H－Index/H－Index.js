function solution(citations) {
    let answer = 0;
    citations = citations.sort((a, b) => b - a);

    for(i=0; i<citations.length; i++){
        if(citations[i] >= i + 1){
            answer++;
        }
    }
    
    return answer;
}