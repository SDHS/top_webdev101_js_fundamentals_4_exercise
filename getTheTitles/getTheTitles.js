const getTheTitles = function(arr) {
    let titleArray = [];
    for (let i = 0; i < arr.length; i++) {
        titleArray.push(arr[i].title);
    }
    return titleArray;
}

module.exports = getTheTitles;
