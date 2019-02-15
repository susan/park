import React, { Component } from 'react';
import { Button, Image, Card, Grid } from "semantic-ui-react";
import EditForm from "./EditForm"


class ParkCard extends Component {

  state= {
   //bad practice to return edit form in function
   //pass around state which will then show the edit form
  showEditForm: false

  }


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
      //console.log("is this working")
      this.props.handleBookMarked(event, this.props.park)
      //just passes up clicked obj

    }

    handleEdit = (event) => {
      //console.log("is edit working")
       this.setState({
        showEditForm: !this.state.showEditForm
       })
    }




  render() {
    // console.log("ParkCard props are", this.props)
    // console.log("---")
    return (
      <div className="ten wide column">
      <Card.Header >
       <div>{this.props.park.full_name}</div>
       <Image  alt = "" src= {this.props.park.img1_url} />
       <Button className="ui brown basic button" onClick={this.bookmarkHandler} > Bookmark </Button>


       {this.props.park.is_editable
       &&
       (
        <div>
        <i className="ui blue trash alternate outline icon"
        value={this.props.park.id} onClick={this.deletePark}> </i>

        <button class="large circular ui icon button" onClick= {this.handleEdit}>  <i class="icon settings">
        {this.props.showTextButton}</i> </button>
        </div>
       )

       }

        {this.state.showEditForm
        &&
        (<EditForm  park={this.props.park} handleEditSubmit={this.props.handleEditSubmit} />)
        }


       </Card.Header>


      </div>
    )
  }
}
//(<div>{this.props.park.directions_info}</div>)

export default ParkCard


