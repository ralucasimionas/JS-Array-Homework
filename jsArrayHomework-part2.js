// Se da urmatorul array:
var products = [
  {
    id: 67,
    name: 'Firestrata',
    price: 26,
    brewery: 'Hop Hooligans'
  },
  {
    id: 212,
    name: 'Punch the Clock',
    price: 21,
    brewery: 'Bereta'
  },
  {
    id: 111,
    name: 'The Guardian',
    price: 21,
    brewery: 'Noah'
  },
  {
    id: 345,
    name: 'Pudge',
    price: 30,
    brewery: 'Hop Hooligans'
  }
]

console.log("Exercitiul 1");
// 1. Folosind metoda aferenta, returneaza din array-ul de mai sus produsul cu numele "Punch the Clock".
var product = products.find(element => element.name === 'Punch the Clock');
console.log(product);
console.log("");


console.log("Exercitiul 2");
// 2. Folosind metoda aferenta, returneaza un array care sa contina doar produsele de la "Hop Hooligans".
var newProducts = products.filter(element => element.brewery === "Hop Hooligans");
console.log(newProducts);
console.log("");

console.log("Exercitiul 3");
// 3. Folosind metoda aferenta, returneaza un nou array, care sa nu contina produsul cu id-ul 212.
var newProduct = products.filter(element => element.id !== 212);
console.log(newProduct); 
console.log("");

console.log("Exercitiul 4");
// 4. Calculeaza suma tuturor produselor din array.
let sum = 0;
for(i=0; i<products.length; i++) {
  sum = sum+ products[i].price;
}
console.log(sum);
console.log("");


console.log("Exercitiul 5");
// 5. Fara a modifica array-ul initial, retuneaza un array nou, in care fiecare element are o noua proprietate: "isFavorite", cu valoarea false. HINT: map + Object.assign

