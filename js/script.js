// console.log('hello'); //test

/*  FIZZ-BUZZ
    1. Cicla i numeri da 1 a 100
    2. Stabilisci se un numero è divisibile per 3 o per 5 o per entrambi
    3. Stampa Fizz per i divisibili per 3, Buzz per i divisibili per 5, FizzBuzz per i divisibili per entrambi
    4. Per tutti gli altri casi stampa il numero
 */

    for(i = 1; i <= 100; i++){
        if((i % 3 == 0) && (i % 5 == 0)){
            console.log('FizzBuzz');
        } else if(i % 3 == 0){
            console.log('Fizz');
        } else if(i % 5 == 0){
            console.log('Buzz');
        } else{
            console.log(i);
        }
    }