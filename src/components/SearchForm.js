import React, { Component } from 'react';


class SearchForm extends Component {
//this would be state for form if I did not have to lift it up:
  // state = {
  //  searchTerm: ""
  // }

  // handleSearch(event) {
  //   console.log("handleSearch running?", event.target.value)
  //   this.setState({
  //   	searchTerm: event.target.value
  //   })
  // }

  render() {
  	// console.log("props are", this.props)
  	// console.log("---	")
	  return(
      <div className="ui right aligned category search" floated="right">
	      <div className="ui icon input">
          <form>
            {/* what value would be and also onChange if I diddn't have to lift
            up state
             <input type="text" value= {this.state.searchTerm}
             placeholder= "Search parks" onChange = {this.handleChange} />*/}
             <input type= "text" value={this.props.searchTerm}
             placeholder="Search parks" onChange={this.props.handleSearch} />
           </form>
         <i className="search icon"></i>
        </div>
       <div className="results"></div>
       </div>
	   )
  }
}

export default SearchForm;
