async function fetchAPI() {
  const q = document.getElementById("queryInput").value

  const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${encodeURIComponent(q)}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '18005a9d61mshd55725f293b8000p1f285ajsn91b129987c62',
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    }
  };

 
  try {
    await fetch(url, options)
      .then(res => res.json())
      .then(data => { 

        //Sólo uso la url de la primera receta de las 10 que tira la API para abrirla en un iloc...
        console.log(data.hits[0].recipe.url);
        let nuevoLink = data.hits[0].recipe.url;
        getIframe = document.getElementById("recipeFrame");
        getIframe.src = nuevoLink;
        //getIframe.innerHTML = `<iframe id="recipeFrame" src="${nuevoLink}" frameborder="0" height="600" width="600"></iframe>`;

      })


  } catch (error) {
    console.error(error);
  }
 
}
 
