/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const a = new Map();

    for (let i = 0; i < nums.length; i++) {
        const b = target - nums[i];

        if (a.has(b)) {
            return [a.get(b), i];
        }

        a.set(nums[i], i);
    }
};