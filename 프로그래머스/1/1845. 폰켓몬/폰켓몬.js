// 해시로 풀이
function solution(nums) {
    const hash = nums.reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc;
    }, {}) // 초깃값이 {}(객체)이므로 acc가 객체의 식별자처럼 작동
    const kind = Object.keys(hash).length; // 폰켓몬 종류
    const get = nums.length / 2; // 가져갈 수 있는 폰켓몬 갯수
    return kind > get ? get : kind;
}