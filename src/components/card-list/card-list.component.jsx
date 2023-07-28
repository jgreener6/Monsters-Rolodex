import { Component } from "react";

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(this.props);

    return <div className="card-list">
        {monsters.map(monster=> (
            <h1 key={monster.id}>{monster.name}</h1>
        ))}
        </div>;
  }
}
