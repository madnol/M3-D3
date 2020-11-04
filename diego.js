const loadSongs = (query) => {
  fetch(`https://rapidapi.p.rapidapi.com/search?q=${query}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "1411491fa1mshec4ae1a8aad6ccep1bd081jsn065dda6a74ed",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  }) //fetch could take some time, therefore it generates a promise
    .then((response) => response.json()) //then awaits for the promise to be resolved (positively) and in this case,
    //creates a second promise to convert the promise payload into a js object
    .then((apiResponse) => {
      //when everything  is done: received info and parsing, we can execute that code that we like

      let albumsDiv = document.querySelector("#albums"); //we take a ref to the albums

      let newRow = document.createElement("div"); //we create our container
      newRow.classList.add("row");
      newRow.classList.add("no-gutters");

      let songs = apiResponse.data; //data is an array

      for (let i = 0; i < songs.length; i++) {
        let song = songs[i];
        newRow.innerHTML +=
          //we add all the songs as a JS card
          `<div class="card col-sm-3">
              <img src="${song.album.cover_big}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${song.title}</h5>
                <p class="card-text">${song.artist.name} - ${song.album.title}</p>
                
              </div>
            </div>`;
      }

      newRow.innerHTML += `<h2>Songs for ${query} </h2>`; //add a title
      albumsDiv.appendChild(newRow); //append everything inside of our albums container
    })
    .catch((err) => {
      // if something is wrong with our request, we are gonna trigger this code here
      console.error(err);
    });
};

window.onload = () => {
    loadSongs("eminem")

    loadSongs("metallica")

    loadSongs("behemoth")
  }