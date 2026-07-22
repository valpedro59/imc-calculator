# Calculateur d'IMC (Indice de Masse Corporelle)

Ce projet contient une fonction simple en JavaScript permettant de calculer l'Indice de Masse Corporelle (IMC) d'une personne et de déterminer sa catégorie de poids associée selon les standards de santé.

## Fonctionnalités

1 **Calcul de l'IMC** : Calcule l'indice à partir du poids (en kg) et de la taille (en mètres).

2 **Classification automatique** : Associe le résultat à l'une des quatre catégories suivantes :

    *Maigreur (< 18.5)
    *Normal (18.5 à 24.9)
    *Surpoids (25 à 29.9)
    *Obésité (≥ 30)

3 **Affichage lisible** : Affiche le résultat directement dans la console avec une précision de deux décimales.

## Prérequis

Pour exécuter ce script, vous avez simplement besoin de :
1 [Node.js](https://nodejs.org) installé sur votre machine, **OU**
2 Un navigateur web (via la console des outils de développement).

## Utilisation

Appelez uniquement la fonction **IMC Maker** en ajoutant votre **poids** en Kg et votre **taille** en metres.

### Code source

La fonction principale s'appelle `imcMaker` et prend deux paramètres : `userWeight` (le poids) et `userHeight` (la taille).

```javascript
const imcMaker = (userWeight, userHeight) => {
  const imc = userWeight / (userHeight * userHeight);
  let category = "";

  if (imc < 18.5) {
    category = "maigreur";
  } else if (imc >= 18.5 && imc < 24.9) {
    category = "normal";
  } else if (imc >= 25 && imc < 29.9) {
    category = "surpoids";
  } else if (imc >= 30) {
    category = "obésité";
  }

  console.log(
    `Votre IMC est : ${imc.toFixed(2)} . vous etes dans la categorie : ${category}`,
  );
  return category;
};
```

### Exécution des tests

Le fichier inclut déjà quelques exemples de test à la fin du script :

```javascript
imcMaker(96, 1.7); // Résultat attendu : obésité
imcMaker(66, 1.73); // Résultat attendu : normal
imcMaker(96, 1.8); // Résultat attendu : surpoids
imcMaker(50, 1.68); // Résultat attendu : maigreur
```

Pour lancer le script avec Node.js, ouvrez votre terminal et exécutez la commande suivante :

```bash
node main.js
```
