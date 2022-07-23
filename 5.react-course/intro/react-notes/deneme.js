const numbers = [3,5,21];

const results = [];

const temp = [];

const max = Math.max(...numbers);

const min = Math.min(...numbers);

console.log(max, min);

for(let i = min; i <= max; i+=2 ){
    temp.push(i);
}

console.log(temp);

for(let number of temp){
    if(!numbers.includes(number)){
        results.push(number);
    }
}

console.log(results);


/** */