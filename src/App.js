import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParkContainer from "./containers/ParkContainer"
import BookmarkContainer from "./containers/BookmarkContainer"
import SearchForm from "./components/SearchForm"
import NewForm from "./components/NewForm"


const parkURL = "http://localhost:3000/api/v1/parks"
class App extends Component {

state = {
  parks: [],
  displayIndex: 0,
  searchTerm: "",
  searchedParks: [],
  bookmarkedParks: [],
}


  componentDidMount() {
    fetch(parkURL)
    .then(resp => resp.json())
    .then(parks => {
       this.setState ({
         parks: parks,
         searchedParks: parks,
       }, () => console.log(this.state))
     })
  }

  handleNewParkSubmit=(event, park) => {
    //event.preventDefault()
    console.log("func to submit new park", park)
    let copyParks = [...this.state.parks, park]
    this.setState({
      parks: copyParks,
      searchedParks: copyParks,
    })
   }

   handleParkDelete = (id) => {
    const copyParks = this.state.parks.filter(park => park.id !== id)
    this.setState({
      parks: copyParks,
      searchedParks: copyParks,
    })
   }

   //for searchBar
   handleSearch = (event)=> {
    //set our searchTerm to event.target.value  here so we can use it in filter
     let searchTerm = event.target.value
     //console.log('is this working')
     //console.log(event)
     let searchedArray = this.state.parks.filter(park => {
        return park.full_name.toLowerCase().includes(searchTerm.toLowerCase())
     });
     this.setState({
       searchTerm: searchTerm,
       searchedParks: searchedArray,
     })
   }


   addBookmarked = (event, parkObj) => {

       let selectedPark = this.state.parks.find(park => {
          return park.id === parkObj.id
        })
     //console.log("bookmarkthis", selectedPark)
        let newBookmarked = [...this.state.bookmarkedParks, selectedPark]
          this.setState({
           bookmarkedParks: newBookmarked
        })

   }

  removeBookmarked = (event, parkObj) => {

       let selectedPark = this.state.parks.find(park => {
          return park.id === parkObj.id
        })
     //console.log("bookmarkthis", selectedPark)
        let newBookmarked = [...this.state.bookmarkedParks].filter(park => {
          return park.id !== parkObj.id
        })
          this.setState({
           bookmarkedParks: newBookmarked
        })

   }



    whichArrayToSendToParkContainer =() => {
      if (this.state.searchedParks.length > 0) {
        return this.state.searchedParks
      }
      return this.state.parks
    }




  render() {
    console.log("bookmarkedparks are", this.state.bookmarkedParks)
    return (
      <div className="App">
      <NewForm handleNewParkSubmit={this.handleNewParkSubmit}/>
      <SearchForm handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
      < ParkContainer  parks={this.whichArrayToSendToParkContainer()} handleParkDelete={this.handleParkDelete}
       handleBookMarked={this.addBookmarked} />
       <BookmarkContainer  parks={this.state.bookmarkedParks} handleBookMarked={this.removeBookmarked}/>

      </div>
    );
  }
}

export default App;

 // displayThreeParks = () => {
   //   return this.state.parks.slice(this.state.displayIndex + this.state.displayIndex + 3)
   // }
