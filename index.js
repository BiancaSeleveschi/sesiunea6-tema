//a.Declara o variabila si initializeaz-o cu un string apoi afiseaza variabila in consola
let word = "Primavara"
console.log(word)
//b.Verifica daca variabila string are mai mult de 10 caractere atunci afiseaza “cuvant lung” altfel afiseaza “cuvant scurt”
if (word.length > 10) {
  console.log("cuvant lung")
}
else {
  console.log("cuvant scurt")
}
//c.Declara 2 variabile a si b, cu valori numerice si afiseaza produsul dintre cele 2 la consola
let a = 5;
let b = 4;
let prod = a * b;
console.log(prod)

//d.Verifica daca variabila a este mai mare decat b atunci afiseaza “a este mai mare”, daca b este mai mare atuunci afiseaza “b este mai mare”, iar daca sunt egale afiseaza “ a si b sunt egale”
if (a > b) {
  console.log("a este mai mare")
}
if (b > a) {
  console.log("b este mai mare")
}
if (a == b) {
  console.log("a si b sunt egale")
}

//e.Scrie o functie care converteste din minute in secunde:primeste ca parametru o valoare numerica ( minute) si returneaza o alta valoare numerica (secunde). Declara o variabila numerica minutes (care reprezinta minutele) si apeleaza functia pentru acea variabila minutes si retine rezultatul returnat de functie intr-o alta variabila si afiseaza-l (singurul exercitiu cu functii la care este precizat flow-ul complet de lucru = toti pasii, restul exercitiilor cu functii se rezolva dupa aceasi abordare)
//AM FACUT IN 2 MODURI
// let minutes = 6;
// let sec = 60;
// function convertMinutesToSeconds(minutes, sec) {
//   let minutesToSeconds = minutes*sec;
//   return minutesToSeconds
// }
// let minutesToSeconds1 = convertMinutesToSeconds(minutes, sec)
// console.log("Totalul secundelor sunt " + minutesToSeconds1)
let minutes;
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
let minutesToSeconds = convertMinutesToSeconds(5)
console.log(minutesToSeconds)

//f.Scrie o functie care converteste din ani in zile si afiseaza rezultatul pentru un apel de functie cu parametrii alesi de tine
function convertYearsToDays(years) {
  return years * 365
}
let years = convertYearsToDays(3)
console.log(years)

//g.Scrie o functie care converteste orele in secunde si afiseaza rezultatul pentru un apel de functie cu parametrii alesi de tine
function convertHoursToSeconds(hours) {
  return hours * 3600
}
let hoursToSeconds = convertHoursToSeconds(4)
console.log(hoursToSeconds)

//h.Scrie o functie care calculeaza aria unui dreptunghi, care primeste ca parametru lungimea si latimea si afiseaza rezultatul pentru un apel de functie cu parametrii alesi de tine
function computeRectangleArea(lungime, latime) {
  return lungime * latime
}
let rectangleArea = computeRectangleArea(9, 7)
console.log("Aria dreptughiului este " + rectangleArea)

//i.Scrie o functie care primeste ca paramemtrii un string si un numar si care verifica daca lungimea string-ului este mai mica decat numarul atunci se va returna stringul “mic”, daca este egala cu nuamrul se va returna stringul “egal” iar daca este mai mare se va returna stringul “mare”. Afiseaza rezultatul returnat.
// let string = "Alexandra";
// let number = 6
function verifyStringLength(string, num) {
  if (string.length < num) {
    console.log("mic")
  }
  if (string.length == num) {
    console.log("egal")
  }
  else if (string.length > num) {
    console.log("mare")
  }
}
let stringLength = verifyStringLength("Marian", 3)

//j.Scrie o functie care verifica daca o persoana are dreptul sa conduca. Daca persoana are permis de conducere si peste 20 de ani se returneza true altfel se returneaza false
//Date de intrare: valoare numerica: age, valoare booleana: hasDriverLicense

// let hasDriverLicense = true;
// let age = 22;
function isAllowedToDrive(age, hasDriverLicense) {
  if (age > 20 && hasDriverLicense) {
    console.log(true)
  }
  else {
    console.log(false)
  }
}
let allowedToDrive = isAllowedToDrive(21, true);

//k.Scrie o functie care primeste ca parametrii 3 numere: a, b si c. Daca suma primelor 2 numere este mai mare decat al treilea atunci returneaza dublul lui c (2*c) altfel returneaza jumatatea lui c
// let o = 1;
// let p = 2;
// let q = 4;
function verifySum(o, p, q) {
  let sum = o + p;
  if (sum > q) {
    return (q * 2)
  }
  else {
    return (q / 2)
  }
}
let sum = verifySum(1, 2, 4)
console.log(sum);


// m. Scrie o functie care primeste 2 parametrii booleeni: isSunny (este soare afara), isHoliday(este sarbatoare)  si unul numeric remainingFreeTime (timp liber in ore)
// let isSunny = true;
// let isHoliday = true;
// let remainingFreeTime = 3;
function whatShouldIDo(isSunny, isHoliday, remainingFreeTime) {
  // Daca este soare afara sau este sarbatoare si am mai mult de 8 ore timp liber se returneaza stringul: “Du-te si distreaza-te toata ziua”
  if ((isSunny || isHoliday) && remainingFreeTime > 8) {
    console.log("Du-te si distreaza-te toata ziua")
  }
  // // Daca este soare afara sau este sarbatoare si am intre 4 si 8 ore timp liber se returneaza stringul: “Du-te si distreaza-te cateva ore”
  if ((isSunny || isHoliday) && (remainingFreeTime > 4 && remainingFreeTime < 8)) {
    console.log("Du-te si distreaza-te cateva ore")
  }
  // // Daca este soare afara dar nu este sarbatoare si am sub 4 ore timp liber se returneaza stringul: “Stai in casa si lucreaza”
  if (isSunny && isHoliday && (remainingFreeTime < 4)) {
    console.log("Stai in casa si lucreaza")
  }
  // // Daca este sarbatoare dar nu e soare afara si am intre 4 si 8 ore timp liber se returneaza stringul: “Du-te la biblioteca”
  if ((isHoliday && !isSunny) && (remainingFreeTime >= 4 && remainingFreeTime <= 8)) {
    console.log("Du-te la biblioteca")
  }
}
let shoudIDo = whatShouldIDo(true, true, 3);

//Scrie o functie care primeste 3 parametri: firstName, lastName and age si returneaza stringul compus din cele 3: “My name is: firstName + lastName and I am age years old”
// let firstName = "Seleveschi";
// let lastName = "Bianca";
// let age1 = 24;
function composePersonalDescription(firstName, lastName, age1) {
  console.log("My name is: " + firstName + " " + lastName + " and I am " + age1 + " years old")
}
let personalDescription1 = composePersonalDescription("Seleveschi", "Bianca", 24);

//o.Scrie o functie care primeste 3 numere si returneaza numarul care este cel mai aproape de 100.
function near_100(x1,y1,z1) {
  if (x1 != y1 != z1) {
    x2 = Math.abs(x1-100); //22-100=-78
    y2 = Math.abs(y1-100);
    z2 = Math.abs(z1-100);

   if (x2<y2 && y2<z2) {
     return x1;
   }
    if (y2<x2 && x2<z2) {
      return y1;
    }
    if (z2<x2 && x2<y2) {
      return z1;
    }
  }
}
console.log(near_100(35,33,44));