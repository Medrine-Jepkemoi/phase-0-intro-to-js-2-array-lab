// Write your solution here!

//Destructive
const cats = ["Milo", "Otis", "Garfield"];


//1 .push()

function destructivelyAppendCat(name){
    cats.push(name);
    return cats
}

console.log(destructivelyAppendCat("Ralph"))

//2 .unshift()
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(name){

    cats.unshift(name);
    return cats;
}

console.log(destructivelyPrependCat("Bob"))

//3 .pop()
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

console.log(destructivelyRemoveLastCat())

//4 .shift()
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

console.log(destructivelyRemoveFirstCat())

//5 ... append
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function appendCat(name){

    let addedAppendCat = [...cats, name];
    return addedAppendCat;
}
console.log(cats);
console.log(appendCat("Broom"))

//6 ... prepend
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function prependCat(name){
    let addedPrependCat = [name, ...cats];
    return addedPrependCat;

}

console.log(cats);
console.log(prependCat("Broom"))

//7 .slice(0, arr.length-1)
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function removeLastCat(){
    let removeLast =cats.slice(0, cats.length-1);
    return removeLast;
}

console.log(cats);
console.log(removeLastCat())


//8 .slice(1)
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function removeFirstCat(){
    let removeFirst =cats.slice(1);
    return removeFirst;
}

console.log(cats);
console.log(removeFirstCat())