import React, { Component } from 'react';
import './App.css';
import {App2} from './App2';
import { Button } from 'react-bootstrap';

class Person extends Component {

	constructor(props){
		super(props);

		this.state={
			isEditMode: false
		}
	}

	EditModeON(){
		this.setState({
			isEditMode : true
		});

	}	

	buttonUpdate(){

		this.props.updateEmployeeInfo(this.props.index,this.refs.textFirstName.value, this.refs.textLastName.value, this.refs.textState.value, this.refs.textCity.value, this.refs.textEmail.value);
		
		this.setState({
			isEditMode : false
		});

	}
	
	buttonDelete(){
		console.log(this.props.prsn.firstName);

		this.props.deleteEmployeeInfo(this.props.index,this.props.prsn.firstName, this.props.prsn.lastName, this.props.prsn.state, this.props.prsn.city, this.props.prsn.email);

	}
	render(){

		var displayMode = (	
						
		<tr>
				<td><label>{this.props.prsn.firstName}</label></td>
				<td><label>{this.props.prsn.lastName}</label></td>
    			<td><label>{this.props.prsn.state}</label></td>
    			<td><label>{this.props.prsn.city}</label></td>
    			<td><label>{this.props.prsn.email}</label></td>
			    <td>
			      <Button bsStyle="primary" onClick={this.EditModeON.bind(this)}>Edit</Button>
			    </td>
			    <td>
			      <Button bsStyle="danger" onClick={this.buttonDelete.bind(this)}>Remove</Button>
			    </td>
		</tr>	
	
		
		);

		var editMode = (
			<tr>
		
					<td><input type="text" ref="textFirstName"  placeholder="first name" defaultValue={this.props.prsn.firstName} /></td>
					<td><input type="text" ref="textLastName" placeholder="last name" defaultValue={this.props.prsn.lastName} /></td>
	    			<td><input type="text" ref="textState"  placeholder="state" defaultValue={this.props.prsn.state} /></td>
					<td><input type="text" ref="textCity"  placeholder="city" defaultValue={this.props.prsn.city} /></td>
					<td><input type="text" ref="textEmail"  placeholder="email" defaultValue={this.props.prsn.email} /></td>

				    <td><Button bsStyle="success" onClick={this.buttonUpdate.bind(this)}>Update</Button></td>
				    		
			</tr>	
		);

		return(
			this.state.isEditMode ? editMode : displayMode
		);
	}
}

export default Person;
