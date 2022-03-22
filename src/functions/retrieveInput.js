// import fetchFastRecipes from './fetchFastRecipes'

import fetchCuiRecipes from './fetchCuiRecipes';

// reference save of user input menucuisine
const inputAuthor = document.getElementById('author');
const inputTag = document.getElementById('tag');
const inputTitle = document.getElementById('title');


// let inputCui = document.getElementById('selcui');
// event listener checkbox
// inputCui.addEventListener("keydown", (e) => {
//     e.preventDefault();
//     console.log('e', inputCui.value, e.target.value);
//     menuCuisine();
//     fetchRecipeByIngredients("apples,+flour,+sugar").then();
// })


const form = document.getElementById('on-submit-cuisine');
let inputCuiString = '';
// event listner user input
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('input', inputAuthor.value, inputTag.value);

    handleCheckbox();
    fetchCuiRecipes(inputAuthor.value, inputTag.value, inputCuiString).then();
    // nu de input refreshen
    inputCuiString = "";
})


function handleCheckbox() {
    // Get the checkbox
    const selectCui1 = document.getElementById("sel-cui-1");
    const selectCui2 = document.getElementById("sel-cui-2");

    // If the checkbox is checked, display the output text

    if (selectCui1.checked == true) {

        inputCuiString = selectCui1.value;
    } else {
        if (selectCui2.checked == true) {

            inputCuiString = selectCui2.value;
            console.log('string input', inputCuiString);
        }
    }


    console.log('string', inputCuiString);



}