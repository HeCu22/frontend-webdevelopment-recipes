import axios from 'axios';
import createListLines from "./createListLines";

const inputParm = 45;

async function fetchFastRecipes(inputParm) {
    console.log('input', inputParm);
    try {
        const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
            params: {
                apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                // apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                // includeIngredients: ingredients,
                maxReadyTime: inputParm,
                number: 5
            },
            headers: {
                "Content-Type": "application/json"
            }

        });

        const foundRecipes = response.data.results;

        // create a  list of max 5 lines that uses array of all found
        createListLines(foundRecipes.slice(0,5));

    } catch
        (e) {
        console.error(e);
    }
}

export default fetchFastRecipes;



