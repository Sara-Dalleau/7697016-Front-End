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

const btnDescription = document.querySelectorAll("btn-description");
btnDescription.addEventListener("click", () => {
  const piecesSansDescription = pieces.filter(function(pieces){
    return pieces.description != null;
  });
})

const btnDecroissant = document.querySelector(".btn-prix-decroissant");
btnDecroissant.addEventListener("click", () => {
  const piecesDecroissant = Array.from(pieces);
  piecesDecroissant = pieces.sort(function(a, b){
    return b.prix - a.prix;
  });
})