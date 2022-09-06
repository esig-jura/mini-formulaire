/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

//Récupération de la liste déroulante
const listeBackground = document.getElementById('background');
// Changer le background lors du changement de valeur dans la listre déroulante
listeBackground.addEventListener('change', function () {
  const image = listeBackground.value
  document.body.style.backgroundImage = `url(./img/backgounds/${image})`
})

const formulaire = document.querySelector('form');
formulaire.addEventListener('submit', function (event) {
  event.preventDefault();
  const btCreer = document.querySelector('[type="submit"]');
  btCreer.classList.add('animate__heartBeat');
  btCreer.addEventListener('animationend', function () {
    alert('Compte créé avec succès !');
    formulaire.reset()
    btCreer.classList.remove('animate__heartBeat')
  });
})
