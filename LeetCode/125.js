var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    
    
    
    console.log(s)
    console.log(s.length)
    let len = s.length
    
    let p1 = 0
    let p2 = len - 1
    
    while(p2-p1 >= 1){
        if(s[p1] !== s[p2]){
            return false
        }
        p1++
        p2--
        console.log(p1)
        console.log(p2)
    }
    return true
  
    
    
};
isPalindrome("race a car")