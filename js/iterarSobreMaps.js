let myMapOne = new Map([
    ['Miguel', 26],
    ['José', 40]
]);



console.log('------ iterar 1 -----------');
//iterar 1

for( const [key, value] of myMapOne){
    console.log(`${key} >>  ${value}`);
}

console.log('------ iterar 2 -----------');


for( const key of myMapOne.keys()){
    console.log('Key > ', key)
}

console.log('------ iterar 3 -----------');

for(const value of myMapOne.values()){
    console.log('Value > ', value);
}

console.log('------ iterar con ForEach -----------');

myMapOne.forEach((value, key) => {
    console.log(`${key} > ${value}`);
});

console.log('------ iterar con entries () -----------');

for(const entry of myMapOne.entries()){
    console.log('Entry > ', entry);
};