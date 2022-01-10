/*
la racine carrée est le chiffre qui s'il est multiplié par lui meme donne le nombre donné n (racine carré de n)
la racine carrée est donc inferieure à n
on doit checker tous les nombre inferieurs à n et voir si en ce multipliant par eux meme il donne n 
si oui c'est le resultat

ex n =9
i 1 , i <9
1*1=1
no return
i = 2 , i <9
2*2 = 4
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


console.log('compute the square root of n');
console.log(`for reference, the result of Math.sqrt: ${Math.sqrt(9)}`); // thx Antho
console.log (computeSquareRoot(9));
console.log(`iterative: ${computeSquareRoot(9)}`);