/*si n est sup ou eg à 1 on prend chaque chiffre de 1 à n et on les multiplie entre eux
initialiser le resultat par défaut 1
initiaiser le compteur par défaut à 1
if n >=1 alors on prend une valeur 1 et on en fait un compteur jusqu'à n 

for (let i = 0; i < 9; i++) {
  str = str + i;
}
*/
const computeFactorialIt = (n) => {
let result = 1;
for (let i = 1; i <= n; i+=1 ){
  result = result*i;
}
return result;
};

// on peut mettre result *= i

console.log('computes the factorial of n');
console.log('computes the factorial of -5');
console.log(computeFactorialIt(-5));
console.log('computes the factorial of 5');
console.log(`iterative: ${computeFactorialIt(5)}`);
/*2 façon différentes d'afficher le résultat*/