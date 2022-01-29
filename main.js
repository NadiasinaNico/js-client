const livres2 = {
  titre: "Physique",
  auteur: "Finoana",
  pages: 120,
};
const livres1 = {
  titre: "Coronavirus",
  auteur: "Nico",
  pages: 240,
};
const livres3 = {
  titre: "Mathematique",
  auteur: "Nadiasina",
  pages: 230,
};
const livres4 = {
  titre: "SVT",
  auteur: "Finoana",
  pages: 120,
};
const livres5 = {
  titre: "Anglais",
  auteur: "Finaritra",
  pages: 40,
};
const livres6 = {
  titre: "Histoire",
  auteur: "Mac",
  pages: 20,
};

var table = document.querySelector("#tableauId");

let livreTotal = [livres1, livres2, livres3, livres4, livres5, livres6];

afficherLivre();

function afficherLivre() {
  var livreAffiche = document.querySelector("#tableauId tbody");
  var livre = "";
  for (i = 0; i < livreTotal.length; i++) {
    livre += `<tr>
            <td>${livreTotal[i].titre}</td>
            <td>${livreTotal[i].auteur}</td>
            <td>${livreTotal[i].pages}</td>
            <td>
              <button  class="btn btn-success" onClick="modifierLivre(${i})">Modifier</button>
              <button  class="btn btn-danger" onClick=" supprimerLivre(${i})">Supprimer</button>
            </td>
          </tr>
          `;
  }
  livreAffiche.innerHTML = livre;
}

const formClick = () => {
  document.querySelector("#formLivres").removeAttribute("class");
  document.querySelector("#modifierLivre").className = "d-none";
};

function supprimerLivre(position) {
  if (confirm("Voulez vous supprimer")) {
    livreTotal.splice(position, 1);
    afficherLivre();
    alert("suppression effectue");
  } else {
    alert("Action Annuler");
  }
}

function modifierLivre(position) {
  document.querySelector("#modifierLivre").removeAttribute("class");
  document.querySelector("#formLivres").className = "d-none";
  document.querySelector("#modifierLivre #titre").value =
    livreTotal[position].titre;
  document.querySelector("#modifierLivre #auteur").value =
    livreTotal[position].auteur;
  document.querySelector("#modifierLivre #pages").value =
    livreTotal[position].pages;
  document.querySelector("#modifierLivre #indentifiant").value = position;
  
}

document.querySelector("#validationModificationLivres").addEventListener('click', function(e){
  e.preventDefault();
  const titre = document.querySelector("#modifierLivre #titre").value;
  const auteur = document.querySelector("#modifierLivre #auteur").value;
  const pages = document.querySelector("#modifierLivre #pages").value;
  const positionModification = document.querySelector("#modifierLivre #indentifiant").value;

  livreTotal[positionModification].titre = titre;
  livreTotal[positionModification].auteur = auteur;
  livreTotal[positionModification].pages = pages;

  afficherLivre();
  document.querySelector("#modifierLivre").className = "d-none";

});



const validation = document.querySelector("#validationAjouterLivre");

validation.addEventListener("click", function (event) {
  event.preventDefault();

  const titre = document.querySelector("#formLivres #titre").value;
  const auteur = document.querySelector("#formLivres #auteur").value;
  const pages = document.querySelector("#formLivres #pages").value;
  ajouterLivre(titre, auteur, pages);
  document.querySelector("#formLivres").reset();
  document.querySelector("#formLivres").className = "d-none";
});

const ajouterLivre = (titre, auteur, pages) => {
  const livres = {
    titre,
    auteur,
    pages,
  };
  livreTotal.push(livres);
  afficherLivre();
};

