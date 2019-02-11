
import React, { Component } from 'react';


class BookmarkCard extends component{

	render(){

		return(
      <div className="one wide column" float: right>
      <Card.Header >

      <Grid>
       <Grid.Column width={2}>
       {this.props.park.full_name}
       <Image  alt = "" src= {this.props.park.img1_url} />
			<h1>hi  </h1>

			)
	}
}

export default Bookmark Card;
