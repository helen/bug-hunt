// See https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    let others: number[] = nums;

    for( let i = 0; i < nums.length; i++ ) {
        others.shift();

        let remainder: number = target - nums[i];
        let key2: number = others.indexOf( remainder );

        if ( -1 !== key2 ) {
            return [ i, key2 + i + 1 ];
        }
    }

    return [];
};
