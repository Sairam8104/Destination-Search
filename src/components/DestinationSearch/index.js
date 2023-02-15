// Write your code here
import {Component} from 'react'
import Destinations from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    console.log(destinationsList)
    const {searchInput} = this.state

    const searchResult = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="container">
        <h1 className="title">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="search"
            className="search-bar"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="list-container">
          {searchResult.map(eachItem => (
            <Destinations destinationPlaces={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
