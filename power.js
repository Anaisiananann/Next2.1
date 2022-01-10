/*si n = 2 p = 5 (2^5=32)
  i = 1, 1<5, ...
  (resultat n=)2 * (n)2 = (nouveau resultat) 4
  nouveau i = 2, 2<5 ...
  (resulat)4 * (n)2 = 8
  i = 3, 3<5 ...
  (resulat)8 * (n)2 = 16
  i = 4, 4<5 ...
  (resulat)16 * (n)2 = 32*/


const computePowerIt = (n, p) => {

  let result = n;//par defaut le resultat est n
  for (let i = 1; i < p; i += 1){
    result = result * n; 
  };
  return result
};

/* c'était faux quand je faisais result * i
  si n = 2 p = 5 (2^5=32)
  i = 1, 1<5, ...
  (resultat n=)2 * (i)1 = (nouveau resultat) 2
  nouveau i = 2, 2<5 ...
  (resulat)2 * (i)2 = 4
  i = 3, 3<5 ...
  (resultat)4 * (i)3 = 12
  i = 4, 4<5 ...
  (resultat)12 * (i)4 = 48 */

  const computePowerRec = (n, p) => {
    if (p === 0) return 1;
    else return n * computePowerRec(n, p - 1);
  }

  /*
si p === 0 alors retourne 1 car n'importe quoi à la puissance 0 ça fait 1
pour tout le reste ça fait n * lui même à la puissance inférieure
ex 2^5=32
power(2, 5) = 2 * power(2,4)
power (2,4) = 2 * power (2, 3)
power (2,3) = 2 * power (2,2)
power (2,2) = 2 *power (2,1)
power (2,1) = 2 * power (2,0)
power (2,0) = 1
donc 
power (2,1) = 2
power (2,2) = 4
power (2,3) = 8
power (2,4) = 16
power(2, 5) = 32
 */


  console.log('computes the power p of n');
  console.log(`for reference, the result with Math.pow: ${Math.pow(2, 5)}`); // pris chez Antho, thx
  console.log(computePowerIt(2, 5));
  console.log(`iterative: ${computePowerIt(2, 5)}`);
  console.log(`recursive: ${computePowerRec(2, 5)}`);