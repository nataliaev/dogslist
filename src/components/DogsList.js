import React, {Component} from 'react'

export default class DogsList extends Component {
  
  renderDogBreed(dog) {
    return <li key={dog}>{dog}</li>
  }
  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {dogBreeds === null ? 'Loading...':
        <ul>
          {dogBreeds.map(this.renderDogBreed)}
        </ul>}
      </div>
    )
  }
}
