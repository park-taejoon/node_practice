console.log('filename : ', __filename);
console.log('dirname :', __dirname);

console.log('output d : %d', 11);

console.log('숫자 : %d + %d = %d', 273,53, 273+53);
console.log('문자열 : %s ', 'Hello World .. !', '특수기호와 상관없음');
console.log('JSON: %j', {name :'RintlanTta'});

console.time('alpha');

var output  = 1;
for( var i = 1; i <= 10; i++) {
    output += 1;
}

console.log('Result : ',output);

console.timeEnd('alpha');

console.log('\u001b[31m', 'Tjpark');

console.log('\u001b[0m', 'Tjpark');