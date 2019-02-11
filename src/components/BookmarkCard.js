
import React, { Component } from 'react';
import { Button, Image, Card, Grid } from "semantic-ui-react";


class BookmarkCard extends Component{

	render(){
      console.log("BookmarkCard props", this.props)
      console.log("---")

	  return(
         <div className="four wide column">
         <Card.Header>
          <div> Vehicle fee: ${this.props.park.vehicle_fee} </div>
          <div> Directions: {this.props.park.directions_info}</div>
          </Card.Header>
          </div>
	   )
	}
}

export default BookmarkCard;
