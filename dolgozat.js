//1. feladat
function divisors(number) {
    let eredmeny = [];
    
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            eredmeny.push(i);
        }
    }
    return eredmeny;
}
console.log("1. feladat", divisors(12)); 

//2. feladat
function threeRuls() {
    let eredmeny = []; 
    let szamlalo = 0; 
        
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) { 
            szamlalo++;
            if (szamlalo > 3) {  
                szamlalo = 1; 
            }
            if (szamlalo > 3){
        }}
        eredmeny.push(i); 
    }    
    return eredmeny; 
}
console.log("2. feladat: ", threeRuls())
/*
//3. feladat
function digitsAverage(number) {
    let szamok;

    for (i = 0; i < number.lenght; i++){
            szamok += number[i];
    }

    let db = number[i].Count();

    let atlag = szamok / db;

    return atlag;
}
console.log(digitsAverage(268));*/

//4. feladat
function gradeCalculator(score, maximum) {
    const szazalek = (score / maximum) * 100;

    if (szazalek >= 90){
        return 'A';
    }
    if (szazalek >= 80 && szazalek <= 90){
        return 'B';
    }
    if (szazalek >= 70 && szazalek <= 80){
        return 'C';
    }
    if (szazalek >= 60 && szazalek <= 70){
        return 'D';
    }
    if (szazalek >= 50 && szazalek <= 60){
        return 'E';
    }
    else{
        return 'F';
    }
}
console.log("4. feladat: ", gradeCalculator(89,100));

