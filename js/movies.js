let imgDefaultPath = 'https://image.tmdb.org/t/p/w500';
$(".searchInput").on("input", function () {
    let value = $(this).val()
    searchMovie(value)
    if (value == "") {
        getMovies("movie/now_playing");
    }
})
getMovies("movie/now_playing");

export async function searchMovie(term) {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${term}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult`)
    response = await response.json()
    showMovies(response.results);
}

function showMovies(arr) {
    let html = ``
    for (let i = 0; i < arr.length; i++) {
        const movie = arr[i];
        console.log(movie);
        let title = movie.title
        let imagePath = "images/default-movie.jpg"
        let stars = getStars(movie.vote_average)
        let releaseDate = movie.release_date;
        let desc
        if (movie.overview.length > 299) {
            desc = movie.overview.substring(0, 299) + ' ...';
        } else {
            desc = movie.overview;
        }
        if (movie.poster_path) {
            imagePath = imgDefaultPath + movie.poster_path
        }
        html += `<div class="col-lg-4 h-100 p-3">
                <div class="movie position-relative overflow-hidden">
                    <img src="${imagePath}" class="w-100">
                    <div class="hover-layer p-3 position-absolute">
                        <div class="film-title text-center">
                            <p class=" fs-2 ">${title}</p>
                        </div>
                        <div class="film-desc">
                            <p class="">${desc}</p>

                            <p>Release Date : <span class="date"> ${releaseDate}</span></p>
                            <div class="stars pt-2">
                                ${stars}
                            </div>

                            <p class="rate-circle mt-2 fs-5">${Math.round(movie.vote_average * 10) / 10}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
    }
    $(".movies-container").html(html)
}

function getStars(avg_votes) {
    let stars;
    if (avg_votes < 1) {
        stars = `<i class="fa-solid fa-star text-muted fs-6"></i>`;
    }
    else if (avg_votes < 2) {
        let term = '';
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if (avg_votes < 3) {
        stars = `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
    else if (avg_votes < 4) {
        let term = '';
        for (let i = 0; i < 1; i++) {
            term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if (avg_votes < 5) {
        let term = '';
        for (let i = 0; i < 2; i++) {
            term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
    else if (avg_votes < 6) {
        let term = '';
        for (let i = 0; i < 2; i++) {
            term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if (avg_votes < 7) {
        let term = '';
        for (let i = 0; i < 3; i++) {
            term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
    else if (avg_votes < 8) {
        let term = '';
        for (let i = 0; i < 3; i++) {
            term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if (avg_votes < 9) {
        let term = '';
        for (let i = 0; i < 4; i++) {
            term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
    else if (avg_votes < 10) {
        let term = '';
        for (let i = 0; i < 4; i++) {
            term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else {
        let term = '';
        for (let i = 0; i < 5; i++) {
            term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
    return stars;
}

export async function getMovies(term) {
    let response = await fetch(`https://api.themoviedb.org/3/${term}?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`)
    response = await response.json()
    showMovies(response.results);
}
