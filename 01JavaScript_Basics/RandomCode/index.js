async function fetchPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    console.log(data);
    const size = data.results.length;
    

    for(let i = 0; i < size; i++){
      const list =   document.createElement('li');
      list.innerHTML = data.results[i].name;
      document.querySelector('div').appendChild(list);
      async function image() {
         const url = data.results[i].url;
         const res = await fetch(url);
         const pokemonImg = await res.json();
         console.log(pokemonImg)
         const div = document.createElement('div');
         const img = pokemonImg.sprites.back_default;
         console.log(img)
         div.innerHTML = `<img src = ${img} />`
         document.querySelector('div').appendChild(div)
      }
      image();
    }
}

fetchPokemon();