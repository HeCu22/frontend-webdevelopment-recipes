const test = `[
{"id": 716426, "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice", "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg", "imageType": "jpg"},
{"id": 715497, "title": "Berry Banana Breakfast Smoothie", "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg", "imageType": "jpg"},
{"id": 716408, "title": "Greek-Style Baked Fish: Fresh, Simple, and Delicious", "image": "https://spoonacular.com/recipeImages/716408-312x231.jpg", "imageType": "jpg"},
{"id": 640941, "title": "Crunchy Brussels Sprouts Side Dish", "image": "https://spoonacular.com/recipeImages/640941-312x231.jpg", "imageType": "jpg"},
{"id": 756814, "title": "Powerhouse Almond Matcha Superfood Smoothie", "image": "https://spoonacular.com/recipeImages/756814-312x231.jpg", "imageType": "jpg"}
]`;

const dataList = JSON.parse(test);
console.log(dataList[3].id);