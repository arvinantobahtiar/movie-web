const API_LINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4167f647016b5152ee590ddbea75fbbf&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=4167f647016b5152ee590ddbea75fbbf&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnMovies(url) {
    fetch(url).then(res=> res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');

            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');

            const thumbnail = document.createElement('img');
            thumbnail.setAttribute('class', 'thumbnail');
            thumbnail.setAttribute('id', 'image');

            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            const rating = document.createElement('h5');
            rating.setAttribute('id', 'rating');
            
            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            thumbnail.src = `${IMG_PATH+element.poster_path}`;
            rating.innerHTML = `${element.vote_average}`;

            center.appendChild(thumbnail);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_card.appendChild(rating);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);


        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchMovie = search.value;

    if(searchMovie) {
        returnMovies(SEARCH_API + searchMovie);
    }
})