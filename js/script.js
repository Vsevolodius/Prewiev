const numberOfFilms = +prompt('Сколько фильмов выуже посмотрели?',''); 

const personalMooviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMooviesDB.movies[a] = b;     
personalMooviesDB.movies[c] = d;   
console.log(personalMooviesDB);