function collectdata()
{
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(username && password) {
      window.location.href = "search.html"; 
    } else {
      alert("Please enter both username and password.");
    }
}
let api = "http://www.omdbapi.com/?apikey=c42d34fa&t=";

function searchmovie(){
  let query = document.getElementById("moviename").value;
  let search = api + query
  fetch(search).then(function(data){
    return data.json()
  }).then(function(data){
    document.getElementById('title').innerText = data.Title;
    document.getElementById('desc').innerText = data.Plot;
    document.getElementById('genre').innerText = data.Genre;
    document.getElementById('actors').innerText = data.Actors;
    document.getElementById('directors').innerText = data.Director;
    document.getElementById('awards').innerText = data.Awards;
    document.getElementById('collection').innerText = data.BoxOffice;
    document.getElementById('ratings').innerText = data.imdbRating;
    document.getElementById('writers').innerText = data.Writer;
    document.getElementById('poster').src = data.Poster;
  }) 
}


    