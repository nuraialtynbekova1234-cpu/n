let str = 'aaa [2] bbb [3] ccc [12] ddd';

let res = str.replace(/\[(\d+)\]/g, function(match, num) {
    return '[' + (num * 2) + ']';
});

console.log(res); 
