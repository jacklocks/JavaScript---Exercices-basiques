let nb_etages = prompt("bonjour, combien d'étages fera ta pyramide?");
let etage = "";
let espace = "";

for (let i = 1; i <= nb_etages; i++) {
  espace = " ".repeat(nb_etages - 1);
  etage = "#".repeat(i);
  console.log(espace + etage);
}
