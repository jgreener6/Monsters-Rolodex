import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import logo from "./logo.svg";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    const searchFeild = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchFeild };
    });

    console.log(this.state.searchFeild);
  };

  render() {

    const {monsters, searchFeild} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchFeild);
    });

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='search-bar'/>
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <img
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                alt="monster"
              />
              <h1>{monster.name}</h1>
            </div>
          );
        })}

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
