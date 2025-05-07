/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let sum;
    let answer;
    for(let i = 0; i <= nums.length-1; i++){
        for(let j = i+1; j <= nums.length-1; j++){
            sum = nums[i] + nums[j];
            if(sum === target){
                answer = [i,j];
            }
        }
    }
    
    return answer;
};