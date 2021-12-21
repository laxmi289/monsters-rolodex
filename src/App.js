import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);   - This is a verberose approach and not usually recommended. Refere handleChaange method.
  }

  componentDidMount() {                                  //Calls the block of code inside, whenever the component is mounted on the browser
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {                                 //Instead of using bind in construtor, use arrow function
    this.setState ({ searchField: e.target.value });
  }

  render () {
    const { monsters, searchField } = this.state;       //Destructuring the states and Equivalent to const monsters = this.state.monsters and const searchField = this.state.searchField
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters' 
          handleChange={this.handleChange}>
        </SearchBox>
        <CardList monsters = { filterMonsters }></CardList>    
      </div>
    );
  }
}

export default App;
