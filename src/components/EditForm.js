import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';


export default class EditForm extends Component {

   state = {
     full_name: this.props.park.full_name,
     img1_url: this.props.park.img1_url,

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
   	const id = (this.props.park.id)
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/parks/${id}`, {
     method: 'PATCH',
     headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     },
    body: JSON.stringify(this.state)
    })
   .then(resp => resp.json())
   .then(editedPark => this.props.handleEditSubmit(event, editedPark))

   this.setState({
     full_name: "",
     img1_url: ""

   })
   }

  render() {
  	console.log("edit props are", this.props)
  	//console.log has to be above return
  	console.log("---")
     return(
     	 <div>
     	   {this.props.park.is_editable ?
           ( <Form onSubmit = {this.handleSubmit}>
              <Form.Group >

                 <Form.Input  name="full_name" placeholder={this.props.park.full_name}
                  value={this.state.full_name} onChange={this.handleChange}/>


                 <Form.Input  name="img1_url" placeholder={this.props.park.im1_url}
                  value={this.state.img1_url} onChange={this.handleChange} />

                 <Button color='blue' floated = 'right' size= 'medium'>Edit Park </Button>
              </Form.Group>
           </Form>)
           :
           (null)
     	   }
      </div>
     )
  }
}
