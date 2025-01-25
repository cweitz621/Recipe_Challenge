//getting HTML elements
const button = document.getElementById('button')
const ingredientsList = document.getElementById('random-ingredients')

// creating database of recipe components

const protein = ['chicken', 'steak', 'pork', 'fish']
const carb = ['rice', 'bread', 'pasta', 'potato']
const veggie = ['asparagus', 'broccoli', 'brussels sprout']
const sauce = ['buffalo', 'horseradish', 'truff', 'ranch', 'garlic aioli']

//Generate combination of random ingredients. Returns string.
const generateIngredients = () => {
    let randProtein = protein[Math.floor(Math.random() * protein.length)]
    let randCarb = carb[Math.floor(Math.random() * carb.length)]
    let randVeggie = veggie[Math.floor(Math.random() * veggie.length)]
    let randSauce = sauce[Math.floor(Math.random() * sauce.length)]
    ingredientsList.innerHTML = `Your ingredients are: ${randProtein}, ${randCarb}, ${randVeggie}, ${randSauce}. Good Luck.`
}

//Appends random ingredients when button is clicked
button.addEventListener("click", generateIngredients);
