/*
un compteur de 2 jusqu'à <n sauf n pour trouver si quelque chose donne un resultat entier
si rien ne donne de resutlat entier alors true
si un truc donne un resultat entier alors false
comment vérifier que c'est un entier ? modulo doit etre egal à 0

ex 7 est un nombre premier
i = 2 i< 7
7%2!=0 pour l'instant rien ne prouve que 7 n'est pas un nombre premier
i = 3 i <7
7%3 != 0 pour l'instant rien ne prouve que 7 n'est pas un nombre premier
i = 4 i <7
7%4


*/

const isPrimeNumber = (n) => {
  for (let i = 2; i < n; i += 1){
    if (n % i === 0)
    return false;
  }
  return n > 1; // c'est comme un false/ true ici si n est sup à 1 ça envoie true
};


console.log(`iterative: ${isPrimeNumber(7)}`);
console.log(`iterative: ${isPrimeNumber(25)}`);