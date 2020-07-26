let mate=require('exact-math');

// 789+34+250443
// 2059-79
// 3.24*97.856
// 1205/12.002
// 125+(643-98)*74/25
console.log(789+34+250443)
console.log(mate.add(789,34,250443)); //10
console.log(mate.sub('2059','79')); //25
console.log(mate.mul(3.24, 97.856)); //2
console.log(mate.div(1205,12.002)); //27,5
console.log(mate.formula('125+(643-98)*74/25')); //8.23
