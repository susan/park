import React, { Component } from 'react';
import { Button, Image, Card, Grid } from "semantic-ui-react";

class ParkCard extends Component {


   deletePark = (event) => {
    // console.log(event.target);
    const id = (this.props.park.id)
    fetch(`http://localhost:3000/api/v1/parks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => this.props.handleParkDelete(id))
   }


    bookmarkHandler = (event) => {
      console.log("is this working")
      this.props.handleBookMarked(event, this.props.park)
      //just passes up clicked obj
    }


  render() {
    console.log("ParkCard props are", this.props)
    console.log("---")
    return (
      <div className="ten wide column">
      <Card.Header >

      {/*<Grid>
       <Grid.Column width={10}>*/}
       {this.props.park.full_name}
       <Image  alt = "" src= {this.props.park.img1_url} />

       <Button className="ui brown basic button" onClick={this.bookmarkHandler} > Add/Remove Bookmark  </Button>
       {this.props.park.is_editable
       ?
       (<i className="ui blue trash alternate outline icon"
        value={this.props.park.id} onClick={this.deletePark}> </i>)
       :
       (null)
       }
       {/*</Grid.Column>
       </*Grid> */}
       </Card.Header>
      </div>
    )
  }
}
export default ParkCard


