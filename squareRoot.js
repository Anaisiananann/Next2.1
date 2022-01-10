/*
la racine carrée est le chiffre qui, s'il est multiplié par lui meme, donne le nombre donné n (racine carré de n)
la racine carrée est donc inferieure à n
on doit checker tous les nombres inferieurs à n et voir si en ce multipliant par eux meme il donne n 
si oui, c'est le resultat

ex n =9
i 1 , i <9
1*1=1 !=n
no return
i = 2 , i <9
2*2 = 4 !=n
no return
i = 3 , i < 9
3*3=9=n
return 3
*/



const computeSquareRoot = (n) => {
for (let i = 1; i < n; i += 1 ){
  if (i*i===n) 
  return i;
};
};


/*
ex racine carrée de 9
square(9,9) = 9*9!=9 no return
square (9,8)= 9*9 !=9 no return
square (9,7)= 7*7 != 9 no return
square (9,6)= 6*6 !=9 no return
square (9, 5)= 5*5 !=9 no return
square (9, 4)= 4*4 != 9 no return
suare (9, 3)= 3*3 = 9 result p = 3
*/


const computeSquareRootRec = (n, p=n) => {
  //let p = n; ça ne marche pas il faut le mettre en haut // on commence par un p nombre tester pour savoir si c'est le résultat = n même si on sait d'avance que ce n'est pas le résultat
  if (p * p === n) return p;
  else return computeSquareRootRec(n, p - 1);
};


console.log('compute the square root of n');
console.log(`for reference, the result of Math.sqrt: ${Math.sqrt(9)}`); // thx Antho
console.log (computeSquareRoot(9));
console.log(`iterative: ${computeSquareRoot(9)}`);
console.log(`recursive: ${computeSquareRootRec(9)}`);