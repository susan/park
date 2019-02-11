
import React, { Component } from 'react';
import ParkCard from "../components/ParkCard"
import { Button, Image, Card, Grid } from "semantic-ui-react";


export default class BookmarkContainer extends Component {

    showBookmarked = () => {
  	    let parkList= this.props.parks.map(park => {
          return <ParkCard key={park.id} park={park} handleBookMarked={this.props.handleBookMarked}
          handleParkDelete={this.props.handleParkDelete}
          showTextButton = {this.props.showTextButton}/>
        })
      return parkList
      //return <BookmarkCard  />
     }

    render() {
    	console.log("bookmarkcontainer props are", this.props)
      console.log("--")

      return (
        <div className="Container">

       <Grid>

        {/* this.props.parks
          ?*/}
      	{this.showBookmarked()}
        {/*why doesn't this have {} around it, because eval whole expression
        :
        (<div></div>)} */}
        </Grid>
      	</div>
      )
    }


}



