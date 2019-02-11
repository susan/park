import React, { Component } from 'react';
import ParkCard from "../components/ParkCard"
import { Button, Image, Card, Grid } from "semantic-ui-react";


const ParkContainer= (props) => {
   // console.log("parkcontainer props are", props)
   // console.log("--")

     let parkList = props.parks.map(park => {
        return <ParkCard key={park.id} park={park} handleParkDelete={props.handleParkDelete}
        handleBookMarked={props.handleBookMarked} showTextButton={props.showTextButton}/>
      })

    return (
      <div className="four wide column">

      <Grid>

      {parkList}
       </Grid>

      </div>


    );
}

export default ParkContainer;
