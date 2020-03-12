$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

$.getJSON('https://api.themoviedb.org/3/trending/all/day?api_key=f5fc7dd9cda2680e5d8b59d03c3bb9ec', function(data) {

for (i = 0; i < data.results.length; i++) {
    $("#film").append(
    
        '<div class="col-lg-5ths pb-5">' +
        '<img class="rounded" src="' + 'https://image.tmdb.org/t/p/w185' + data.results[i].poster_path + '" alt="">' +
        '<h5>' + data.results[i].title + '</h5>' +
        // '<h6>' + myMap.get(data.results[i].genre_ids[0]) + '</h6>' +
        '</div>'
    );
}
$.getJSON('https://api.themoviedb.org/3/genre/movie/list?api_key=f5fc7dd9cda2680e5d8b59d03c3bb9ec&language=en-US', function getGenre(data) {

    let myMap = new Map()

    var i;
    for (i = 0; i < data.genres.length; i++) {
        myMap.set(data.genres[i].id, data.genres[i].name)
    }    
});

});