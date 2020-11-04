// window.onload = function () {
//     let heartOutline = document.querySelector(".loved-track .far.fa-heart");
//     let heartFilled = document.querySelector(".loved-track .fas.fa-heart");
//     heartFilled.addEventListener("click", function () {
//       if (!heartFilled.classList.contains("active")) {
//         heartFilled.classList.toggle("active");
//         heartFilled.style.opacity = 1;
//         heartOutline.style.opacity = 0;
//       } else {
//         heartFilled.classList.toggle("active");
//         heartFilled.style.opacity = 0;
//         heartOutline.style.opacity = 1;
//       }
//     });
//     fetchData('eminem')
//        }

//        const fetchData = (param) => {
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

const getPhotos = () => {
let parent = document.querySelector(".photo-container")
let photos = []
  fetch("http://www.splashbase.co/api/v1/images/search?query=beach", {
    "method": "GET",
  })
    .then((response) => response.json())
    .then((parsedJson) => {
      parsedJson.data.forEach(element => {
       console.log(element)
    let image = `<img
    class="bd-placeholder-img card-img-top"
    width="100%"
    height="225"
    xmlns="${element.image.url}"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
    role="img"
    aria-label="Placeholder: Thumbnail"
  >
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#55595c" />
    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
      Thumbnail
    </text>
  </img> -->`

  photos.push(image)
                });
                parent.innerHTML = photos.join('')
              })
              .catch(err => {
                console.error(err);
              });
             };
      

//       let images = parsedJson.data;
//       for (let i = 0; i < images.length; i++) {
//         let image = images[i];
//       }
//     });
// };

// let image =

//     `<svg
//       class="bd-placeholder-img card-img-top"
//       width="100%"
//       height="225"
//       xmlns="${element.url}"
//       preserveAspectRatio="xMidYMid slice"
//       focusable="false"
//       role="img"
//       aria-label="Placeholder: Thumbnail"
//     >
//       <title>Placeholder</title>
//       <rect width="100%" height="100%" fill="#55595c" />
//       <text x="50%" y="50%" fill="#eceeef" dy=".3em">
//         ${element.id}
//       </text>
//     </svg>`
//     photos.push(image)
//               });
//               parent.innerHTML = photos.join('')
//             })
//             .catch(err => {
//               console.error(err);
//             });
//            };
