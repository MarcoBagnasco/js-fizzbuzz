// console.log('hello'); //test

/*  FIZZ-BUZZ
    1. Cicla i numeri da 1 a 100
    2. Stabilisci se un numero è divisibile per 3 o per 5 o per entrambi
    3. Stampa Fizz per i divisibili per 3, Buzz per i divisibili per 5, FizzBuzz per i divisibili per entrambi
    4. Per tutti gli altri casi stampa il numero
 */
var limit = 100;
for(i = 1; i <= limit; i++){
    if((i % 3 == 0) && (i % 5 == 0)){
        // console.log('FizzBuzz');
        document.getElementById(i).innerHTML = '<span class="fizz-buzz">FizzBuzz</span>';
    } else if(i % 3 == 0){
        // console.log('Fizz');
        document.getElementById(i).innerHTML = '<span class="fizz">Fizz</span>';
    } else if(i % 5 == 0){
        // console.log('Buzz');
        document.getElementById(i).innerHTML = '<span class="buzz">Buzz</span>';
    } else{
        // console.log(i);
        document.getElementById(i).innerHTML = i;
    }
}