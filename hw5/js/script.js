// Задание 1


// let i = 1;
// while (i <= 10) {
// 	console.log(i + ' ');
// 	i++;
// }

// let i = 20;
// while (i >= 10) {
// 	console.log(i + ' ');
// 	i--;
// }

// for (var i = 1; i <= 10; i++) {
// 	console.log(i + ' ');
// }

// for (var i = 20; i >= 10; i--) {
// 	console.log(i + ' ');
// }




// исправленное

// let i = 9;
// do {
//    i++;
//    console.log (i);
// } while (i < 20);

// let i = 21;
// do {
//    i--;
//    console.log (i);
// } while (i > 10);




// Задание2



// let n = 10;

// primeNumber:
// for (let i = 2; i <= n; i++) { 

//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue primeNumber; 
//   }

//   console.log( i ); // простое число
// }

 




// const primeNumber = (a,b) => {
//     if (a <= 1){
//         alert('Ошибка, число меньше или равно 1')
//     }
//     else{
//         nextPrime:
//         for( let i = a; i <= b; i++){
//             for (let j = 2; j < i; j++){
//                 if ( i % j === 0){
//                     continue nextPrime;
//                 }
//             }
//             console.log(i)
//         }
//     }
// }
// primeNumber(20, 100)