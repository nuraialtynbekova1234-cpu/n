let str = '31.12.2025';
let str = '31.12.2025';
let res = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3.$2.$1');

console.log(res);