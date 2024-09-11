function solution(nums) {
    let answer = 0;
    const ponkemon = nums.length / 2;
    const set = new Set(nums);
    if(set.size > ponkemon){
        answer = ponkemon;
    } else {
        answer = set.size
    }
    return answer;
}