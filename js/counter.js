// Счётчик выбранного количества цветов на карточке

let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let firstCounterInput = document.querySelector('.first-counter-input');


 plus.onclick = function () {
   firstCounterInput.value++;
};
  
 minus.onclick = function () {
   firstCounterInput.value--;   
};



  
