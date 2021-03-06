/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 * 时间复杂度O(N)
 * 空间复杂度O(N)，O(N + h) 约等于O(N）
 */
var levelOrder = function(root) {
    let res = []
    if(!root) return []
    
    function dfs(node,layer){
        if(!res[layer]){
            res[layer] = []
        }
        res[layer].push(node.val)

        for(let el of node.children){
            dfs(el,layer+1)
        }
    }

    dfs(root,0)
    return res
};