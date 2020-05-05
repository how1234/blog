/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {

    if(!root) return []

    let queue = []
    let res = []
    queue.push(root)

    while(queue.length){
        for(let i=0;i<queue.length;i++){
            let node = queue.shift()
            res.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

    }
    return res
};