import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super()

    this.state = { 
      monsters: [],
      searchField: ''
    }

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( data => this.setState({ monsters: data }))
  }

  handleChange = (event) =>{
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <SearchBox 
          placeholder='search monster' 
          handleChange={this.handleChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
