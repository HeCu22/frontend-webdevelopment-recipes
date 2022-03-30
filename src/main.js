import fetchFastRecipes from './functions/fetchFastRecipes'
import fetchRecipeByIngredients from './functions/fetchRecipeByIngredients'
import fetchRecipeByDetails from "./functions/fetchRecipeById";
import createListLines from "./functions/createListLines";

// reference save of user input radiobuttons

const selectRadioC = document.getElementById('cuisine');
const selectRadioH = document.getElementById('healthy');
const selectRadioQ = document.getElementById('quick');

// buttonDisplay for nextPage display
const buttonDisp1 = document.getElementById("button-style1");
const buttonDisp2 = document.getElementById("button-style2");
const buttonDisp3 = document.getElementById("button-style3");

// listen to button id="buttonNext" to display next page
buttonDisp1.addEventListener("click", (e) => {
    console.log('e', selectRadioC.checked, selectRadioH.checked, selectRadioQ.checked);
    if (selectRadioC.checked) {
        menuCuisine();
    }
});
buttonDisp2.addEventListener("click", (e) => {
    console.log('e', selectRadioC.checked, selectRadioH.checked, selectRadioQ.checked);
    if (selectRadioH.checked) {
        fetchRecipeByDetails("salad").then();
        fetchFastRecipes(30).then();
    }
});
buttonDisp3.addEventListener("click", (e) => {
    console.log('e', selectRadioC.checked, selectRadioH.checked, selectRadioQ.checked);
    if (selectRadioQ.checked) {
        fetchRecipeByDetails("salad").then();
        fetchFastRecipes(30).then();
    }
});


// event listener radio button
selectRadioC.addEventListener("keyup", (e) => {
    e.preventDefault();
})

// event listener radio button
selectRadioH.addEventListener("keyup", (e) => {
    e.preventDefault();
    // console.log('e', selectRadioH.value);

})
// event listener radio button
selectRadioQ.addEventListener("keydown", (e) => {
    e.preventDefault();
    // console.log('e', selectRadioQ.value);
})

function menuCuisine() {
    location.href = "./menus/menuCuisine.html";
}