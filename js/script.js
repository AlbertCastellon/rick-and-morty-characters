let sigpagina;
let antpagina;
const currentPage = 1;
const sumar = (page) => page++
const restar = (page) => page--
const urlBase = "https://rickandmortyapi.com/api/character";
const nextPage = document.getElementById('next-page');
const prevPage = document.getElementById('prev-page');
const listaPersonajes = document.getElementById("character-list");




const obtenerInfo = (url) => {
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('No se ha conseguido respuesta');
      } else {
        return response.json();
      }
    })
    .then((data) => {
        nextPage.addEventListener('click', ((currentPage, urlBase) => {
            currentPage++
            urlBase = urlBase + '?page=' + currentPage
        }))
        prevPage.addEventListener('click', ((currentPage, urlBase) => {
            currentPage
            urlBase = urlBase + '?page=' + currentPage
        }))
        obtenerPersonajes(urlBase)
        
    })
    .catch((error) => {
        console.log('Error')
    })
}






const obtenerPersonajes = (url) => {
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('No se ha conseguido respuesta');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      
      data.results.forEach(element => {
        const personaje = document.createElement("li");
        const imagen = document.createElement('img');
        const name = document.createElement('h3');
        const especie = document.createElement('h4');
        const div = document.createElement('div');
        imagen.src = element.image
        name.innerHTML = 'Name: ' + element.name
        especie.innerHTML = 'Species: ' + element.species
        div.appendChild(imagen)
        div.appendChild(name)
        div.appendChild(especie)
        personaje.appendChild(div)
        listaPersonajes.appendChild(personaje)
      })
    })
    .catch((error) => {
        console.log('Error')
    })
    
    
}
obtenerInfo(urlBase)




