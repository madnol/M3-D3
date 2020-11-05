// const getPhotos = (param) => {
//       fetch(`http://www.splashbase.co/api/v1/images/search?query=${param}`, {
//         "method": "GET",
//       })
//         .then((response) => response.json())
//         .then((parsedJson) => {
//           parsedJson.images.forEach(element => {
//            console.log(element) }

//         },
const btnFetch = document.querySelectorAll(".btnFetch");
const containerImgs = document.querySelector(".container-images");
const btnModalImages = document.querySelectorAll("button");
let btns = document.getElementsByClassName("btnImageModal");


const getPhotos = (param) => {
  
  // let cardRow = [];

  fetch(`http://www.splashbase.co/api/v1/images/search?query=${param}`, {
    "method": "GET",
  })
    .then((response) => response.json())
    .then((parsedJson) => {
      containerImgs.querySelectorAll('*').forEach(element=>element.remove())

      parsedJson.images.forEach((element) => {
        const div = document.createElement("div");
        console.log(element);
        // for (let i = 0; i < div.length; i++)         
        div.classList.add("col-md-4")
        div.classList.add("images-container")
        div.innerHTML = ` <div class="card mb-4 shadow-sm">
                                                  <img class="card-img-top" src="${element.url}">
                                                   <div class="card-body">
                                                       <p class="card-text">
                                                           This is a wider card with supporting text below as a natural
                                                           lead-in to additional content. This content is a little bit
                                                           longer.
                                                       </p>
                                                       <div class="justify-content-between align-items-center">
                                                           <div class="btn-group">
                                                               <button type="button" class="btn btn-sm btn-outline-secondary btnImageModal" data-toggle="modal" data-target="#imageModal" imageUrl="${element.url}">
                                                                   View
                                                               </button>
                                                               <button type="button" class="btn btn-sm btn-outline-secondary btnHide" onclick="hideToggle()">
                                                                   Hide
                                                               </button>
                                                           </div>
                                                           <small class="text-muted">${element.id}</small>
                                                       </div>
                                                   </div>
                                               </div>`;
        // cardRow.push(div);
        containerImgs.appendChild(div);

      });
      
    });
    
};

const hideToggle = () => {
  let allCards = document.querySelectorAll(".images-container")
  let btnsHide = document.querySelectorAll(".btnHide")
  for (let i = 0; i < btnsHide.length; i++) {
    btnsHide[i].onclick = function(){
          allCards[i].style.display = "none";
      }    
  }

}
const btn = document.querySelector('.search-btn')
btn.addEventListener('click', function(e){
  e.preventDefault()
  const input = document.querySelector('.form-control').value
  getPhotos(input)
})
//  const fetchData = (param) => {
//          let parent = document.querySelector(".highlighted-albums")
//          let cardRow = []
//         fetch(`https://rapidapi.p.rapidapi.com/search?q=${param}`, {
//           "method": "GET",
//           "headers": {
//             "x-rapidapi-key": "4bb20f6604msh9b222051d03b6c2p1fd59ajsn582121b526ed",
//             "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
//           }
//         })
//         .then(response => response.json()).then(parsedJson=> {

//           parsedJson.data.forEach(element => {
//             console.log(element)
//             let card = ` <div class="trending card col-3">
//             <img
//               class="card-img-top"
//               src="${element.album.cover_xl}"
//               alt="spotify_playlist_1"
//             />
//             <i class="spotify-card-icon fab fa-spotify"></i>
//             <span class="overlay-icons"
//               ><i class="heart far fa-heart fa-sm mr-3"></i
//               ><i class="play fas fa-play fa-1x mr-3"></i
//               ><i class="fa fa-ellipsis-h fa-sm"></i>
//             </span>
//             <div>
//               <h6>${element.title}</h6>
//             </div>
//           </div>`
//           cardRow.push(card)
//           });
//           parent.innerHTML = cardRow.join('')
//         })
//         .catch(err => {
//           console.error(err);
//         });
//        };
