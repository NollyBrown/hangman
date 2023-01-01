const mot = prompt("Choisissez le mot à trouver :")!;
alert("Vous avez choisi le mot : " + mot);
console.clear();

// code qui retient les trucs d'avant
const foundIndexes: Set<number> = new Set([]);
let errorNumber = 0;

while (mot.length > foundIndexes.size && errorNumber < 10) {
  // code qui check la lettre
  const lettre = prompt("Choisissez une lettre :");
  let jaiTrouve = false;
  for (let i = 0; i <= mot.length - 1; i = i + 1) {
    const lettreCourante = mot[i];
    if (lettreCourante === lettre) {
      foundIndexes.add(i);
      jaiTrouve = true;
      // je retiens que j'ai trouvé
    }
  }
  if (jaiTrouve) {
    console.log("Bravo, la lettre est dans le mot");
  } else {
    console.log("Oops, la lettre n'est pas dans le mot");
    errorNumber++;
  }

  console.log(errorNumber);

  // code qui dessine
  let dessin = "";
  for (let i = 0; i <= mot.length - 1; i = i + 1) {
    if (foundIndexes.has(i)) {
      dessin = dessin + " " + mot[i] + " ";
    } else {
      dessin = dessin + " _ ";
    }
  }
  console.log(dessin);
}

if (errorNumber === 10) {
  console.log("T'es nul");
} else {
  console.log("Bravo, vous avez gagné !");
}
