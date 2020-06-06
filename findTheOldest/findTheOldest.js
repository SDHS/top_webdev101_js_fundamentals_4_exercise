let findTheOldest = function(arr) {
    let maxAge = -1;
    let personWithMaxAge = {};
    for (let i = 0; i < arr.length; i++) {
        let currentAge;
        if (arr[i].yearOfDeath) {
            currentAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
        else {
            currentAge = new Date().getFullYear() - arr[i].yearOfBirth;
        }
        if (currentAge > maxAge) {
            maxAge = currentAge;
            personWithMaxAge = arr[i];
        }
    }
    return personWithMaxAge;
}
module.exports = findTheOldest
