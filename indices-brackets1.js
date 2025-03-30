let movieOptions = [
    ["Up", "Shrek", "Bambi"],
    ["Avatar", "Batman", "Joker"],
    ["Annie", "Matilda", "Wonder"]
];
console.log(movieOptions[0][0]);
console.log(movieOptions[0][1]);
console.log(movieOptions[0][2]);

console.log(movieOptions[1][0]);
console.log(movieOptions[1][1]);
console.log(movieOptions[1][2]);

console.log(movieOptions[2][0]);
console.log(movieOptions[2][1]);
console.log(movieOptions[2][2]);

let row, item;

row = 0;
item = 0;
console.log(movieOptions[row][item]);

item = 1;
console.log(movieOptions[row][item]);

item = 2;
console.log(movieOptions[row][item]);


row = 1;
item = 0;
console.log(movieOptions[row][item]);

item = 1;
console.log(movieOptions[row][item]);

item = 2;
console.log(movieOptions[row][item]);


row = 2;
item = 0;
console.log(movieOptions[row][item]);

item = 1;
console.log(movieOptions[row][item]);

item = 2;
console.log(movieOptions[row][item]);

for (let i = 0; i < movieOptions[1].length; i++) {console.log(movieOptions[1][i])};