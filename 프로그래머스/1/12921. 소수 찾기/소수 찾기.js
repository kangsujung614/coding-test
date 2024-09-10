function solution(n) {
    let answer = 0;
    for(let i = 2; i <= n; i++){
        let isPrime = true;

        if(i === 2){
            answer++;
            continue;
        }
        if(i % 2 === 0){
            isPrime = false;
            continue;
        }
            
        let divisor = 3;
        while(divisor <= Math.sqrt(i)){
            if(i % divisor  === 0){
                isPrime = false;
                break;
            }
            divisor += 2;
        }
        if(isPrime){
            answer++;
        }
    }
    return answer;
}