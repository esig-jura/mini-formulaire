/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

//Récupération de la liste déroulante
const listeBackground = document.getElementById('background');

listeBackground.addEventListener('change', function () {
  const image = listeBackground.value
  document.body.style.backgroundImage = `url(../img/backgounds/${image})`
})
