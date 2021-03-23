// console.log('hello'); //test

/*  FIZZ-BUZZ
    1. Cicla i numeri da 1 a 100
    2. Stabilisci se un numero è divisibile per 3 o per 5 o per entrambi
    3. Stampa Fizz per i divisibili per 3, Buzz per i divisibili per 5, FizzBuzz per i divisibili per entrambi
    4. Per tutti gli altri casi stampa il numero
 */

//Ask for fizz and buzz values
for(;true;){
    var fizz = parseInt(prompt('Inserisci multiplo per il Fizz'));
    if(!isNaN(fizz)){
        break;
    }
    alert('Non hai inserito un numero')
}

for(;true;){
    var buzz = parseInt(prompt('Inserisci multiplo per il Buzz'));
    if(!isNaN(buzz)){
        break;
    }
    alert('Non hai inserito un numero')
}

var limit = 100;

// Print Legend
document.getElementById('fizz-num').innerHTML = fizz;
document.getElementById('buzz-num').innerHTML = buzz;
document.getElementById('fizz-buzz-num-1').innerHTML = fizz;
document.getElementById('fizz-buzz-num-2').innerHTML = buzz;

for(i = 1; i <= limit; i++){
    if((i % fizz == 0) && (i % buzz == 0)){
        // console.log('FizzBuzz');
        document.getElementById(i).innerHTML = '<span class="fizz-buzz">FizzBuzz</span>';
    } else if(i % fizz == 0){
        // console.log('Fizz');
        document.getElementById(i).innerHTML = '<span class="fizz">Fizz</span>';
    } else if(i % buzz == 0){
        // console.log('Buzz');
        document.getElementById(i).innerHTML = '<span class="buzz">Buzz</span>';
    } else{
        // console.log(i);
        document.getElementById(i).innerHTML = i;
    }
}