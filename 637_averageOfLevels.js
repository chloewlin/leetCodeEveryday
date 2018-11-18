// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let averageOfLevels = function(root) {
  let averages = [];
  let queue = [root];

  while (queue.length > 0) {
    let curr = queue.shift();
    averages.push(curr.val);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return averages;
};

var newTree = new TreeNode(3);
newTree.left = new TreeNode(9);
newTree.right = new TreeNode(20);
newTree.right.left = new TreeNode(15);
newTree.right.right = new TreeNode(7);

console.log(averageOfLevels(newTree)); // [3, 14.5, 11]