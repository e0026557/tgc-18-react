import React from 'react';
import Book from './Book';

export default class App extends React.Component {
  state = {
    fruits: ['apples', 'bananas', 'cherries'],
    superheroes: ['captain america', 'iron man', 'spiderman'],
    movies: ['lord of the rings', 'dunes', 'matrix'],
    secretOfLife: 42,
    books: [
      {
        title: 'lord of the rings',
        author: 'jrr tolkien'
      },
      {
        title: 'twilight',
        author: 'stephanie meyer'
      }
    ]
  }

  renderSuperheroes() {
    let superheroes = [];
    for (let superhero of this.state.superheroes) {
      superheroes.push(<li key={superhero}>{superhero}</li>)
    }
    return superheroes;
  }

  renderBooks() {
    let bookElements = [];
    for (let book of this.state.books) {
      bookElements.push(<Book key={book.title} title={book.title} author={book.author} />)
    }

    return bookElements;
  }

  render() {
    // Array of JSX elements
    let fruitElements = [];
    for (let fruit of this.state.fruits) {
      fruitElements.push(<li key={fruit}>{fruit}</li>)
    }

    return (
      <React.Fragment>
        <h1>Fruits</h1>
        <ul>
          {fruitElements}
        </ul>

        <h1>Super heroes</h1>
        <ol>
          {this.renderSuperheroes()}
        </ol>

        <h1>Movies</h1>
        <ul>
          {this.state.movies.map(function (movie) {
            return <li>{movie}</li>
          })}
        </ul>

        <h1>Books</h1>
        <ul>
          {this.renderBooks()}
        </ul>
      </React.Fragment>
    )
  }
}
