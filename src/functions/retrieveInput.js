// import fetchFastRecipes from './fetchFastRecipes'

import fetchCuiRecipes from './fetchCuiRecipes';
import createCuisineList from "./createCuisineList";


//array with cuisines;
const cuisineList = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean",
    "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"];


createCuisineList(cuisineList);


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


    // If the checkbox is checked, display the output text

    let selCui = 0;
    let selectCui = [];
    for (let i = 0; i < cuisineList.length; i++) {
        // Get the checkbox

        selCui = `sel-cui-${i}`;
        selectCui[i] = document.getElementById(selCui);
        if (selectCui[i].checked === true) {
            inputCuiString += selectCui[i].value;
            inputCuiString += ",";
        }
        console.log(inputCuiString);
    }


    // cuisineInput.setAttribute("value", `${cuisines[i]}`);


    console.log('string', inputCuiString);


}