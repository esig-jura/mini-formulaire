/**
 * @author Steve Fallet
 * @since 2023.09.26
 */
//Récupération de la liste déroulante
const listeBackground = document.getElementById('background');

// Écoute le changement de sélection "change" de la liste déroulante
// Et change l'arrière-plan du body
listeBackground.addEventListener('change', function () {
  const image = listeBackground.value
  document.body.style.backgroundImage = `url(./img/backgrounds/${image})`
})

/*****************************************
 ENVOI DU FORMULAIRE
 *****************************************/

// Récupération du formulaire et de ses éléments
const formulaire = document.querySelector('form');
const txtPassword = document.querySelector('#password');
const txtPasswordConfirm = document.querySelector('#password-confirm');

// Ecoute l'envoi du formulaire
formulaire.addEventListener('submit', function (event) {
  // Annule l'envoi du formulaire
  event.preventDefault();

  // Si longueur (length) du mot de passes plus petit que 3
  if (txtPassword.value.length < 3) {
    alert('Le mot de passe doit contenir au moins 3 caractères !');
    return; // Arrête la fonction
  }
  // Si les mots de passe ne correspondent pas
  if (txtPassword.value !== txtPasswordConfirm.value) {
    alert('Les mots de passe ne correspondent pas !');
    return; // Arrête la fonction
  }

  // Si tout est OK, on envoie le formulaire
  alert('Compte créé avec succès !');
  formulaire.submit()
})
