# Next2.1

https://www.thehackingproject.org/fr/dashboard/courses/7/weeks/2/days/1

Les exercices

Réalise tous les exercices à la racine de ton dossier. Fais attention à bien respecter le prototype des fonctions. Sauf le contraire est spécifié, chaque exercice devra utiliser la notion de récursivité. En cas d'erreur, tes fonctions doivent retourner 0.
2.1. Valeur factorielle

    En mathématiques, la factorielle d'un entier naturel n est le produit des nombres entiers strictement positifs inférieurs ou égaux à n. Exemple : 5! = 5 * 4 * 3 * 2 * 1 = 120.

⚠️ Attention aux cas particuliers (n < 0, n = 0) lorsque tu écris tes fonctions.
2.1.1. Méthode itérative

Écris une fonction itérative (qui fonctionne par itération et non par récursivité) qui retourne la valeur factorielle d'un nombre donné en paramètre.

Son prototype doit être comme tel :

const computeFactorialIt = (n) => {}

2.1.2. Méthode récursive

Maintenant, même exercice, mais en utilisant la récursivité !

const computeFactorialRec = (n) => {}

2.2. Puissance d'un nombre
2.2.1. Méthode itérative

Écris une fonction itérative qui retourne son premier argument à la puissance p, où p est le second argument. En cas d'erreur, la fonction doit retourner 0. Son prototype doit être comme tel :

const computePowerIt = (n, p) => {}

2.2.2. Méthode récursive

Même exercice (et oui, encore...) en utilisant la récursivité !

const computePowerRec = (n, p) => {}

2.3. Racine carrée

Comme tu peux le constater, on réalise pas mal de maths en algorithmie. Mais, à ton grand bonheur (ou pas), ce sont des maths simples. Pas de quoi mettre la tête au carré à ton ancien prof de maths ! Pour cet exercice, tu vas devoir écrire une fonction qui retourne la racine carrée d'un nombre. Le prototype sera le suivant :

const computeSquareRoot = (n, p) => {}

2.4. Nombre premier

    Un nombre premier est un entier naturel qui admet exactement deux diviseurs distincts entiers et positifs. Ces deux diviseurs sont 1 et le nombre considéré, puisque tout nombre a pour diviseurs 1 et lui-même (comme le montre l’égalité n = 1 × n), les nombres premiers étant ceux qui n’en possèdent aucun autre. Par exemple, le nombre entier 7 est premier, car 1 et 7 sont les seuls diviseurs entiers de 7.

Tu as peut-être trouvé les précédents exercices trop faciles ? Et bien à partir de maintenant ça va se corser un peu ! Bon chance.

Dans cet exercice, tu vas devoir écrire une fonction qui retourne true si n est un nombre premier et false s'il ne l'est pas.

const isPrimeNumber = (n) => {}

2.5. Trouver un nombre premier

Tu es toujours là ? Félicitations, on va voir comment tu t'en sors sur celui-là. Maintenant que tu sais détecter si un nombre est premier ou non, tu vas devoir écrire une fonction qui va retourner le plus petit nombre premier supérieur ou égal à n.

const findSupPrime = (n) => {}

C'est tout (et déjà pas mal) pour aujourd'hui ! Maintenant que tu sais utiliser la récursivité, on va pouvoir s'amuser un peu les prochains jours avec des algorithmes de tri. À demain !
2.6. Exercice bonus pour les big boss

Si tu as fini la journée, qu'il te reste du temps et que tu te sens en forme, alors voici un dernier exercice. Écris une fonction qui retourne le nombre de possibilités de placer n reines sur un échiquier de taille nxn sans qu'elles soient capables de se manger entre elles en un seul mouvement.

const countValidQueens = (n) => {}

3. Rendu attendu

Un fichier par fonction, sauf pour les exercices avec méthode itérative + récursive (mettre les 2 fonctions dans un même fichier). Pour cette semaine qui est portée sur l'algorithmie, pas besoin d'avoir de fichier HTML pour inclure notre JS. Tu peux exécuter ton code directement dans ton terminal en faisant node monFichier.js.

Pour tester tes fonctions, tu pourras tout simplement faire par exemple console.log(isPrimeNumber(15)); à la fin de ton fichier.

Pense à bien tester tes fonctions avec plusieurs paramètres différents, dont des nombres négatifs et nuls, pour voir comment ta fonction se comporte !
