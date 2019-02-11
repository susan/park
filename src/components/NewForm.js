import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';


class NewForm extends Component {

   state = {
     full_name: "",
     img1_url: "",

   }

   handleChange = (event) => {
    // console.log("this is target", event.target)
    // console.log("this is target.name", [event.target.name])
    // console.log("this is target.value", event.target.value)

    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log("state is", this.state)
    )
   }

  handleSubmit= (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/parks", {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     },
    body: JSON.stringify(this.state)
    })
   .then(resp => resp.json())
   .then(data => this.props.handleParkSubmit(event, data))

   this.setState({
     full_name: "",
     img1_url: ""

   })
   }

   // postPark  { //execution context is obj so no need for arros
   // return fetch("http://localhost:3000/api/v1/parks", {
   //   method: 'POST',
   //   headers: {
   //    'Content-Type': 'application/json',
   //    'Accept': 'application/json'
   //   },
   //  body: JSON.stringify(this.state)
   //  })
   // .then(resp => resp.json())
   //  .catch(console.error)
   //  //only do first promise here, if successful,
   //  //call the func and do second promise in the handleSubmit and
   //  //pass in your funcmachine handleNewParkSubmit with the result of second promise
   // }

  render() {
    // console.log("newform props are", this.props)
    // console.log("---")
    return(

  	  <Form onSubmit={this.handleSubmit} >
          <Form.Group>
          <Form.Input name="full_name" placeholder="Add/Edit Park Name"
            value={this.state.full_name} onChange={this.handleChange}/>
          <Form.Input  name="img1_url" placeholder="Web Address for Image"
            value={this.state.img1_url} onChange= {this.handleChange} />
          <Button color='blue' floated = 'right' size= 'medium'>Submit Park </Button>
          </Form.Group>
       </Form>
  	)
  }
}









export default NewForm;
