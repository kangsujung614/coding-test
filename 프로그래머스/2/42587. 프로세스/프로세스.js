function solution(priorities, location) {
    let idxArr = [];
    let order = 1;
    for(let i=0; i<priorities.length; i++){
        idxArr.push(i);
    }
    let j=0;
    while(j<priorities.length){
        let maxValue = Math.max(...priorities);
        if(priorities[j] === maxValue){
            priorities.shift();
            if(idxArr.shift() === location){
                return order;
            } else {
                order++;
            }
        } else {
            priorities.push(priorities[j]);
            priorities.shift();
            idxArr.push(idxArr[j]);
            idxArr.shift();
        }
    }
}