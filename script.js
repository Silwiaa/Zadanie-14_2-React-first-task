var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju'
      //  img_src: 'https://ia.media-imdb.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Każdy zna Króla Lwa:)'
    },
    {
        id: 3,
        title: 'Władca pierścieni',
        desc: 'Powieśc której akcja rozgrywa się w mitologicznym świecie Śródziemia'
      },
     {
        id: 4,
        title: 'Toy Story',
        desc: 'Film opowiadający o zabawkach chłopca imieniem Andy'
      }
];

var moviesElements = movies.map(function(movie) {
        return React.createElement('li', {key: movie.id},
                React.createElement('h2', {}, movie.title),
                React.createElement('p', {}, movie.desc),
                //React.createElement('img', {}, //movie.img_src)
        );
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );
                               
ReactDOM.render(element, document.getElementById('app'));