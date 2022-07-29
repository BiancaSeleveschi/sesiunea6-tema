//a.Declara o variabila si initializeaz-o cu un string apoi afiseaza variabila in consola
let word = "Primavara"
console.log(word);

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
let minutes;
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));

//f.Scrie o functie care converteste din ani in zile si afiseaza rezultatul pentru un apel de functie cu parametrii alesi de tine
function convertYearsToDays(years) {
  return years * 365
}
console.log(convertYearsToDays(3));

//g.Scrie o functie care converteste orele in secunde si afiseaza rezultatul pentru un apel de functie cu parametrii alesi de tine
function convertHoursToSeconds(hours) {
  return hours * 3600
}
console.log(convertHoursToSeconds(4))

//h.Scrie o functie care calculeaza aria unui dreptunghi, care primeste ca parametru lungimea si latimea si afiseaza rezultatul pentru un apel de functie cu parametrii alesi de tine
function computeRectangleArea(lungime, latime) {
  return lungime * latime
}
console.log("Aria dreptughiului este " + computeRectangleArea(9, 7))

//i.Scrie o functie care primeste ca paramemtrii un string si un numar si care verifica daca lungimea string-ului este mai mica decat numarul atunci se va returna stringul “mic”, daca este egala cu nuamrul se va returna stringul “egal” iar daca este mai mare se va returna stringul “mare”. Afiseaza rezultatul returnat.
function verifyStringLength(string, num) {
  if (string.length < num) {
    return "mic";
  }
  else if (string.length == num) {
    return "egal";
  }
  else if (string.length > num) {
    return "mare";
  }
}
let stringLength = verifyStringLength("Andrei", 6)
console.log(stringLength);
//j.Scrie o functie care verifica daca o persoana are dreptul sa conduca. Daca persoana are permis de conducere si peste 20 de ani se returneza true altfel se returneaza false
//Date de intrare: valoare numerica: age, valoare booleana: hasDriverLicense
function isAllowedToDrive(age, hasDriverLicense) {
  if (age > 20 && hasDriverLicense) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isAllowedToDrive(19, true));
if (isAllowedToDrive === true) {
  console.log("Persoana are dreptul sa conduca")
}
else {
  console.log("Persoana nu are dreptul sa conduca")
}

//k.Scrie o functie care primeste ca parametrii 3 numere: a, b si c. Daca suma primelor 2 numere este mai mare decat al treilea atunci returneaza dublul lui c (2*c) altfel returneaza jumatatea lui c
function verifySum(d, e, f) {
  if ((d + e) > f) {
    return f * 2
  }
  return f / 2;
}
console.log(verifySum(3, 4, 8));


//l. Scrie o functie care returneaza diferenta absoluta dintre 2 numere. Diferenta absoluta insemna valoarea pozitiva a diferentei (exemplu: abs(2,3) = |2-3| = |-1| = 1, abs(3,2) = 1) 
// Exemplu: computeAbsoluteDifference(3,8) => 5
//return Math.abs(y-z) - modificarea pe care am sters-o
function computeAbsoluteDifference(y, z) {
  if (y > z) {
    return y - z;
  }
  return z - y;
}
console.log(computeAbsoluteDifference(4, 7));

// m. Scrie o functie care primeste 2 parametrii booleeni: isSunny (este soare afara), isHoliday(este sarbatoare)  si unul numeric remainingFreeTime (timp liber in ore)
function whatShouldIDo(isSunny, isHoliday, remainingFreeTime) {
  // Daca este soare afara sau este sarbatoare si am mai mult de 8 ore timp liber se returneaza stringul: “Du-te si distreaza-te toata ziua”
  if ((isSunny || isHoliday) && remainingFreeTime > 8) {
    return "Du-te si distreaza-te toata ziua";
  }
  // Daca este soare afara sau este sarbatoare si am intre 4 si 8 ore timp liber se returneaza stringul: “Du-te si distreaza-te cateva ore”
  if ((isSunny || isHoliday) && (remainingFreeTime > 4 && remainingFreeTime < 8)) {
    return "Du-te si distreaza-te cateva ore"
  }
  // Daca este soare afara dar nu este sarbatoare si am sub 4 ore timp liber se returneaza stringul: “Stai in casa si lucreaza”
  if (isSunny && isHoliday && (remainingFreeTime < 4)) {
    return "Stai in casa si lucreaza"
  }
  // Daca este sarbatoare dar nu e soare afara si am intre 4 si 8 ore timp liber se returneaza stringul: “Du-te la biblioteca”
  if ((isHoliday && !isSunny) && (remainingFreeTime >= 4 && remainingFreeTime <= 8)) {
    return "Du-te la biblioteca"
  }
}
console.log(whatShouldIDo(true, true, 3));

// n.Scrie o functie care primeste 3 parametri: firstName, lastName and age si returneaza stringul compus din cele 3: “My name is: firstName + lastName and I am age years old”
function composePersonalDescription(firstName, lastName, age1) {
  return "My name is: " + firstName + " " + lastName + " and I am " + age1 + " years old";
}
console.log(composePersonalDescription("Seleveschi", "Bianca", 24));

// o. Scrie o functie care primeste 3 numere si returneaza numarul care este cel mai aproape de 100.
function near100(x1, y1, z1) {
  if (x1 != y1 != z1) {
    x2 = Math.abs(x1 - 100); //35-100=--65
    y2 = Math.abs(y1 - 100);
    z2 = Math.abs(z1 - 100);

    if (x2 < y2 && x2 < z2) {
      return x1;
    }
    if (y2 < x2 && y2 < z2) {
      return y1;
    }
    if (z2 < x2 && z2 < y2) {
      return z1;
    }
  }
}
console.log(near100(66, 88, 44));