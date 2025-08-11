let input = document.querySelector("#articleInput");
let btnAjouter = document.querySelector("#addButton");
let searchBar = document.querySelector("#searchInput");
let articleTableBody = document.querySelector("#articleTableBody");
let clearButton = document.querySelector("#clearButton");
let translationArea = document.querySelector("#translationArea");
let message = document.querySelector("#message");
let body  = document.querySelector('body')

let paragraph;
btnAjouter.addEventListener("click", function (event) {
  event.preventDefault();
  let newArticle = input.value.trim();

  if (newArticle === "") {
    message.textContent = "Le champ doit contenir au moins un caractère ‼️";
    return;
  }

fetch(`https://api.mymemory.translated.net/get?q=${newArticle}!&langpair=fr|en`) 
   
.then(response => response.json())
.then(data=> {
    let paragraph = document.createElement("p");
    paragraph.innerHTML  = data.responseData.translatedText


    body.prepend(paragraph)
})
.catch(error => console.error('ERROR:', error))

  // CRÉER UNE NOUVELLE LIGNE DANS LE TABLEAU
  let row = document.createElement("tr");

  // AJOUTER LA COLONNE D'ARTICLE
  let articleCell = document.createElement("td");
  articleCell.textContent = newArticle;

  // LA COLONNE POUR LE BOUTON SUPPRIMER UN ARTICLE
  let actionCell = document.createElement("td");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    row.remove();
  });
  actionCell.appendChild(deleteBtn);

  // AJOUTER DES CELLULES À LA LIGNE
  row.appendChild(articleCell);
  row.appendChild(actionCell);

  // AJOUTER UNE LIGNE AU TABLEAU
  articleTableBody.appendChild(row);

  // RÉINITIALISER LE CHAMP
  input.value = "";
});


searchBar.addEventListener("keyup", function () {
  // CONVERTIR LA STRING EN MINISCULE
  let filter = searchBar.value.toLowerCase();
  // RÉCUP LES LIGNES DU TABLEAU
  let rows = articleTableBody.getElementsByTagName("tr");
  Array.from(rows).forEach(function (row) {
    // ACCÉDER AU CONTENU DE LA PREMMIÈRE COLONNE (C L'ARTICLE)
    let articleText = row.cells[0].textContent.toLowerCase();
    // FUNCTION INCLUDES POUR VOIR SI ÇA CONTIENT LA VALEUR
    if (articleText.includes(filter)) {
      // AFFICHER OU PAS
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});


// VIDER LA LISTE 

clearButton.addEventListener('click', function(){
    articleTableBody.innerHTML = " "
    message.textContent=  "Vous avez supprimer tous les articles"
    paragraph.innerHTML= " "
})

