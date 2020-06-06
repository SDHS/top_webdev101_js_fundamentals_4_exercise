

const removeFromArray = function(arr, ...args) {
    return arr.filter((el) => !args.includes(el));  
} 

module.exports = removeFromArray
