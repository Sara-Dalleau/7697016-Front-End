// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
// Création des balises 
for (let i = 0; i < pieces.length; i++) {

const article = pieces[i];
const pieceElement = document.createElement("article");
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponible ? "En stock" : "Rupture de stock";
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";

//Rattachement de nos balises au DOM
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(pieceElement);
pieceElement.appendChild(imageElement);
pieceElement.appendChild(nomElement);
pieceElement.appendChild(prixElement);
pieceElement.appendChild(categorieElement);
pieceElement.appendChild(descriptionElement);
pieceElement.appendChild(disponibiliteElement);
}
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     console.log(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
   console.log(piecesFiltrees)
});

const btnDescription = document.querySelectorAll("btn-description");
btnDescription.addEventListener("click", () => {
  const piecesSansDescription = pieces.filter(function(piece){
    return piece.description;
  });
  console.log(piecesSansDescription);
})

const btnDecroissant = document.querySelector(".btn-prix-decroissant");
btnDecroissant.addEventListener("click", () => {
  const piecesDecroissant = Array.from(pieces);
  piecesDecroissant.sort(function(a, b){
    return b.prix - a.prix;
  });
  console.log(piecesDecroissant);
})

const noms = pieces.map(piece => piece.nom);
for (let i = pieces.length - 1; i>= 0; i--){
  if (pices[i].prix > 35){
    noms.splice(i, 1);
  }
}
// Création de la liste

const abordablesElements = document.createElement("ul");
//Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++){
  const nomElement = document.createElement("li");
  nomElement.innerText = noms[i];
  abordablesElements.appendChild(nomElement);
}
// ajout de l'en tête puis de la liste au bloc résultats filtres
document.querySelector(".abordables").appendChild(abordablesElements)

const nomsDisponibles = pieces.map(piece => piece.nom);
const prixDisponible = pieces.map(piece => piece.prix);


for (let i = pieces.length -1 ; i >= 0 ; i--) {
if(pieces[i].disponibilite === false) {
  nomsDisponibles.splice(i, 1);
  prixDisponible.splice(i, 1);
 }
}
const elementDisponible = document.createElement("ul");
for (let i = 0; i < nomsDisponibles.length; i++) {
  const nomElement = document.createElement("li");
  nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponible[i]} €`;
  elementDisponible.appendChild(nomElement);
}
document.querySelector(".disponibles").appendChild(elementDisponible);