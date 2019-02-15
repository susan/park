
import React, { Component } from 'react';
import BookmarkCard from "./BookmarkCard"


export default class ButtonComponent extends Component{

  render(){
  	return <button class="large circular ui icon button" onClick={()=> this.props.showParkDetails(this.props.park)}>  <i class="icon settings">
        yes i am the button that shows details </i> </button>
  }

}
