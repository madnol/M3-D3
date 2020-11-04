window.onload = function () {
    let heartOutline = document.querySelector(".loved-track .far.fa-heart");
    let heartFilled = document.querySelector(".loved-track .fas.fa-heart");
    heartFilled.addEventListener("click", function () {
      if (!heartFilled.classList.contains("active")) {
        heartFilled.classList.toggle("active");
        heartFilled.style.opacity = 1;
        heartOutline.style.opacity = 0;
      } else {
        heartFilled.classList.toggle("active");
        heartFilled.style.opacity = 0;
        heartOutline.style.opacity = 1;
      }
    });
    fetchData('eminem')
       }
  
       const fetchData = (param) => {
         let parent = document.querySelector(".highlighted-albums")
         let cardRow = []
        fetch(`https://rapidapi.p.rapidapi.com/search?q=${param}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "4bb20f6604msh9b222051d03b6c2p1fd59ajsn582121b526ed",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
          }
        })
        .then(response => response.json()).then(parsedJson=> {
    
          parsedJson.data.forEach(element => {
            console.log(element)
            let card = ` <div class="trending card col-3">
            <img
              class="card-img-top"
              src="${element.album.cover_xl}"
              alt="spotify_playlist_1"
            />
            <i class="spotify-card-icon fab fa-spotify"></i>
            <span class="overlay-icons"
              ><i class="heart far fa-heart fa-sm mr-3"></i
              ><i class="play fas fa-play fa-1x mr-3"></i
              ><i class="fa fa-ellipsis-h fa-sm"></i>
            </span>
            <div>
              <h6>${element.title}</h6>
            </div>
          </div>`
          cardRow.push(card)
          });
          parent.innerHTML = cardRow.join('')
        })
        .catch(err => {
          console.error(err);
        });
       };
  