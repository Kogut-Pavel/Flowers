// Показывает/скрывает дополнительные карточки с цветами при нажатии на кнопку "Все цветы"

let btnMore = document.querySelector('.more');
let visuallyHidden = document.querySelector('.visually-hidden');

btnMore.addEventListener("click", function() {

  if (visuallyHidden.style.display == 'flex')
    visuallyHidden.style.display = 'none';
  else visuallyHidden.style.display = 'flex'
  
});
