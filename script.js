var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Hary Potter'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, "Król Lew"),
                React.createElement('p', {}, "Każdy zna Króla Lwa:)")
            ),
        )
    );
                               
ReactDOM.render(element, document.getElementById('app'));