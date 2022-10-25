
let salaries = [1036, 3205, 2030, 2945];

console.log("Exercitiul 1.");
// Creaza o functie care primeste ca parametrul lista si
// returneaza prima valoare dvizibila cu 5. ( o poti numi 'simpleFind' :) )
// Hint: poti folosi break pentru a opri parcurgerea listei cand ai gasit valoarea dorita.


let simpleFind = (list) => {
    for( i=0; i<list.length; i++ )
        if (list[i] % 5 === 0) {
            return list[i];
            break;
        }
}
console.log(simpleFind(salaries));
console.log("");


console.log("Exercitiul 2.")
// Creaza o functie care primeste o valoare si returneaza true daca este intre 2500 si 3000
let valueBetween = (value) => {
    if ( value > 2500 && value < 3000 ) {
        return true;
    }
 }

 console.log("");

console.log("Exercitiul 3");
// Pornind de la codul functiei 'find' de mai sus creaza o functie care primeste ca parametrul lista si o functie callback
// si returneaza prima valoare care respecta conditia testata in functia callaback ( o poti numi 'find' )
// Apeleaza functia 'find' folosind functia de la punctul 2 ca si functie de callback
let simpleFind2 = (list,callBackFunction) => {
    for( i=0; i<list.length; i++ )
        if ((callBackFunction(list[i]))) {
            return list[i];
            break;
        }
}
let result = simpleFind2(salaries,valueBetween);
console.log(result);

console.log("");


console.log("Exercitiul 4");
// Apeleaza functia de la punctul 3. cu lista (array-ul) salaries si o functie care testeaza ca o valoare e divizibila cu 10 
let divFunction = (value) => {
    if(value % 10 === 0) {
        return value;
    }
}

result = simpleFind2(salaries,divFunction);
console.log(result);