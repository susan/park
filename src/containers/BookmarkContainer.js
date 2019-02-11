
import React, { Component } from 'react';
import ParkCard from "../components/ParkCard"



export default class BookmarkContainer extends Component {

    showBookmarked = () => {

  	    let parkList= this.props.parks.map(park => {
          return <ParkCard key={park.id} park={park} handleBookMarked={this.props.handleBookMarked} handleParkDelete={this.props.handleParkDelete}/>
        })
      return parkList
      //return <BookmarkCard  />
     }

    render() {
    	console.log("bookmarkcontainer props are", this.props)
      console.log("--")

      return (
        <div className="bookmark" >
        {/* this.props.parks
          ?*/}
      	{this.showBookmarked()}
        {/*why doesn't this have {} around it, becvause egval whole expression
        :
        (<div></div>)} */}
      	</div>
      )
    }


}



