import fetchFastRecipes from './fetchFastRecipes'
import fetchRecipeByIngredients from './fetchRecipeByIngredients'

// reference save of user input and radiobuttons
const input = document.getElementById('user-input-field');


const form = document.getElementById('on-submit');

// event listner user input
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('input', input.value);
    fetchFastRecipes(input.value).then();
})