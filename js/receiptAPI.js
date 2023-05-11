
/*
function fetchAPI() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '18005a9d61mshd55725f293b8000p1f285ajsn91b129987c62',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&cuisine=italian&excludeCuisine=greek&diet=vegetarian&intolerances=gluten&equipment=pan&includeIngredients=tomato%2Ccheese&excludeIngredients=eggs&type=main%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&minSugar=0&maxSugar=100&minZinc=0&maxZinc=100&offset=0&number=10&limitLicense=false&ranking=2', options)
        .then(res => res.json())
        .then(respuesta => { console.log(respuesta) })

    }

    */


//document.addEventListener('DOMContentLoaded', () => {
//    const consultarBtn = document.getElementById('consultarBtn');
//    consultarBtn.addEventListener('click', fetchAPI);
//});




/*
function fetchAPI() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '18005a9d61mshd55725f293b8000p1f285ajsn91b129987c62',
            'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
        }
    };

    fetch('https://themealdb.p.rapidapi.com/filter.php?i=chicken_breast', options)
        .then(res => res.json())
        .then(respuesta => { document.getElementById("resultArea").value = respuesta })

}


// ARRIBA PRUEBAS HECHAS CON OTRAS API'S

*/


async function fetchAPI() {
    const url = 'https://cookr-recipe-parser.p.rapidapi.com/getRecipe?source=http%3A%2F%2Fwww.culinaryhill.com%2Fspinach-and-artichoke-dip';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '18005a9d61mshd55725f293b8000p1f285ajsn91b129987c62',
            'X-RapidAPI-Host': 'cookr-recipe-parser.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const resultadoFormateado = JSON.stringify(JSON.parse(result), null, 2);

        //<li>${recipe.description}${recipe.recipeIngredients}</li>);

        document.getElementById("resultArea").value = resultadoFormateado;
    } catch (error) {
        console.error(error);
        document.getElementById("resultArea").value = error;
    }
}



/*

// FORMATO E INFORMACIÓN DEL JSON AL INGRESAR "pasta"

{
  "status": 201,
  "recipe": {
    "recipeDiet": [],
    "recipeCuisine": [
      "american"
    ],
    "recipeCategory": [
      "appetizer",
      "bread"
    ],
    "recipeOccasion": [],
    "recipeUtensils": [
      "bowl"
    ],
    "name": "Spinach Artichoke Dip",
    "image": "https://www.culinaryhill.com/wp-content/uploads/2022/06/Spinach-Artichoke-Dip-Culinary-Hill-1200x800-1.jpg",
    "description": "Homemade Spinach Artichoke Dip is even better than the classic restaurant appetizer. It&#039;s hot, bubbly, cheesy, just begging for some crusty bread or tortilla chips.",
    "cookTime": "25 m",
    "cookTimeOriginalFormat": "PT25M",
    "prepTime": "5 m",
    "prepTimeOriginalFormat": "PT5M",
    "totalTime": "30 m",
    "totalTimeOriginalFormat": "PT30M",
    "recipeYield": "8",
    "recipeIngredients": [
      "8 ounces cream cheese (softened)",
      "1/2 cup mayonnaise",
      "1/2 cup sour cream",
      "12 ounces marinated artichoke hearts (drained and chopped (see note 1))",
      "10 ounces frozen chopped spinach (thawed and excess water removed (see note 2))",
      "1 cup shredded mozzarella cheese ((4 ounces))",
      "Salt and freshly ground black pepper (to taste)",
      "tortilla chips (or bread chunks for serving)"
    ],
    "recipeInstructions": [
      {
        "type": "text",
        "text": "Preheat oven to 400 degrees. Coat a 9-inch pie plate or other baking dish with nonstick cooking spray."
      },
      {
        "type": "text",
        "text": "In a medium bowl, add cream cheese, mayonnaise, and sour cream and mix until smooth. Stir in artichoke hearts, spinach, mozzarella cheese, and salt and pepper to taste (I like 1/2 teaspoon salt and 1/4 teaspoon pepper)."
      },
      {
        "type": "text",
        "text": "Spread evenly into prepared baking dish and cover with foil. Bake until hot and bubbly, about 35 to 40 minutes. Serve with tortilla chips or crusty bread."
      }
    ],
    "keywords": "spinach artichoke dip",
    "ratingValue": 5,
    "nutritionServingSize": "0.5 cup",
    "nutritionCalories": "222 kcal",
    "nutritionFatContent": "21 g",
    "nutritionSaturatedFatContent": "6 g",
    "nutritionCholesterolContent": "25 mg",
    "nutritionSodiumContent": "376 mg",
    "nutritionCarbohydrateContent": "4 g",
    "nutritionFiberContent": "2 g",
    "nutritionSugarContent": "1 g",
    "nutritionProteinContent": "5 g",
    "recipeTags": [
      {
        "name": "spinach-artichoke-dip"
      },
      {
        "name": "black-pepper"
      },
      {
        "name": "spinach"
      },
      {
        "name": "cream-cheese"
      },
      {
        "name": "mozzarella"
      }
    ],
    "searchTerms": "spinach artichoke dip homemade even better classic restaurant appetizer it&#039;s hot bubbly  cheesy  just begging crusty bread tortilla chips  black pepper  spinach  cream cheese  mozzarella"
  },
  "url": "http://www.culinaryhill.com/spinach-and-artichoke-dip"
}

*/