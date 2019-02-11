
import React, { Component } from 'react';
import BookmarkCard from "../components/ParkCard"



export default class BookmarkContainer extends Component {

    showBookmarked = () => {

  	    let parkList= this.props.parks.map(park => {
          return <BookmarkCard key={park.id} park={park} />
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



