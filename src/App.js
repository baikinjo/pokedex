import React, { Component } from 'react'
import './App.css'

import { CardList } from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box'

class App extends Component {
  constructor() {
    super()

    this.state = {
      pokemons: [],
      searchField: ''
    }
  }

  componentDidMount() {
    let j = 1
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(body => {
        for (let i = 0; i < body.results.length; i++) {
          this.setState({
            pokemons: [
              ...this.state.pokemons,
              {
                name: body.results[i].name,
                url: body.results[i].url,
                id: j
              }
            ]
          })
          j++
        }
      })
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { pokemons, searchField } = this.state
    const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <SearchBox
          placeholder="search pokemons"
          handleChange={this.handleChange}
        />
        <CardList pokemons={filteredPokemons} />
      </div>
    )
  }
}

export default App
