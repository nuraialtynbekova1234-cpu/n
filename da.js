let str = '123 456 789';

let res = str.replace(/(\d+)/g, function(match) {
    return match.split('').reverse().join('');
});

console.log(res);