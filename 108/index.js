/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function sortedArrayToBST(nums) {
    if (nums.length === 0) {
        return null;
    }
    var breakpoint = Math.floor(nums.length / 2);
    var root = nums.length > 1
        ? new TreeNode(nums[breakpoint], sortedArrayToBST(nums.slice(0, breakpoint)), sortedArrayToBST(nums.slice(breakpoint + 1, nums.length)))
        : nums.length === 1
            ? new TreeNode(nums[0], null, null)
            : null;
    return root;
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
