import fetchFastRecipes from './functions/fetchFastRecipes'
import fetchRecipeByIngredients from './functions/fetchRecipeByIngredients'
import fetchRecipeByDetails from "./functions/fetchRecipeById";

// reference save of user input radiobuttons

const selectRadioC = document.getElementById('cuisine');
const selectRadioH = document.getElementById('healthy');
const selectRadioQ = document.getElementById('quick');

// event listener radio button
selectRadioC.addEventListener("keyup", (e) => {
    e.preventDefault();
    // console.log('e', selectRadioC.value);
    menuCuisine();

    // fetchRecipeByIngredients("apples,+flour,+sugar").then();
})
// event listener radio button
selectRadioH.addEventListener("keyup", (e) => {
    e.preventDefault();
    // console.log('e', selectRadioH.value);
    fetchRecipeByDetails("salad").t
    hen();
})
// event listener radio button
selectRadioQ.addEventListener("keydown", (e) => {
    e.preventDefault();
    // console.log('e', selectRadioQ.value);
    fetchFastRecipes(30).then();
})

function menuCuisine() {
    location.href = "./menucuisine.html";
}