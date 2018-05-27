var movies = [
  {
    title: 'Harry Potter',
    desc: 'Film o czarodzieju'
  },
  {
    title: 'Król Lew',
    desc: 'Każdy zna Króla Lwa:)'
  }
];
var moviesElements = movies.map(function(movies){
        return React.createElement('li', {},
                    React.createElement('h2', {}, movies.title),
                    React.createElement('p', {}, movies.desc)
                ),
    });
var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );
                               
ReactDOM.render(element, document.getElementById('app'));