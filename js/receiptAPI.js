// Algo mejor, pero no me convence la info.
async function fetchAPI() {
  //const url = 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup';
  const prefix = document.getElementById("queryInput").value;
  const url = `https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=${encodeURIComponent(prefix)}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '18005a9d61mshd55725f293b8000p1f285ajsn91b129987c62',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
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
// FORMATO E INFORMACIÓN DEL JSON AL INGRESAR "pizza"

{
  "results": [
    {
      "display": "pizza",
      "search_value": "pizza",
      "type": "ingredient"
    },
    {
      "display": "pizza dough",
      "search_value": "pizza dough",
      "type": "ingredient"
    }
  ]
}

*/