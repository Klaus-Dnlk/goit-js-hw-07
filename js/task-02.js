const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsMap = ingredients.map(el => {
  const li = document.createElement('li')
  li.innerHTML = `<p>${el}</p>`
  return li
})

ingredientsList.append(...ingredientsMap);