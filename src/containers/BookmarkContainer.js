
import React, { Component } from 'react';
import ParkCard from "../components/ParkCard"
import { Button, Image, Card, Grid } from "semantic-ui-react";
import ButtonComponent from "../components/ButtonComponent"
import BookmarkCard from "../components/BookmarkCard"

export default class BookmarkContainer extends Component {
  state= {
    parkObj: {},
  }

    showParkDetails = (parkObj) =>{
       this.setState({
       parkObj: parkObj,
     })
    }

    showBookmarked = () => {
  	    let parkList= this.props.parks.map(park => {
          return(
          <div>
          <ParkCard key={park.id} park={park} handleBookMarked={this.props.handleBookMarked}
          handleParkDelete={this.props.handleParkDelete}
          showTextButton = {this.props.showTextButton}/>
          <ButtonComponent park = {park} showParkDetails={this.showParkDetails}/>
        </div>
          )

        })
      return(
      <div>
         <div>
         {parkList}
         </div>

         {this.state.parkObj

       &&
          <BookmarkCard parkObj={this.state.parkObj} />
        }
      </div>
      )
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
      );
    }


}



