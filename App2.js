import React, { Component } from 'react';
import { Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';


export class App2 extends Component {

    constructor(props){
  super(props);

        this.state = {
            FirstName :"",
            LastName:"",
            State:"",
            City:"",
            Email:"",
            data: {
                "Maharashtra" : ["Amravati","Pune","Nagpur","Mumbai"],
                "UP" : ["Lucknow","Kanpur","Agra"],
                "Karnataka" : ["Bangalore","Mysuru","Udupi"]
            },
            cities: ["Select"]
        }
    }
  
    buttonClicked() {

        var emailName = (this.state.Email);
        var status = emailName.includes("@")
        var fName = (this.state.FirstName);
        var lName =  (this.state.LastName);
        var stateName = (this.state.State);
        var cityName =  (this.state.City);
      
        if(fName != "" && lName != "" && stateName != "" && cityName != "" && emailName != "")
        {
          if(status == true)
          {
            console.log('Button was clicked!');
            console.log(this.state.FirstName);
            this.props.getEmployeeInfo(this.state.FirstName, this.state.LastName, this.state.State, this.state.City,this.state.Email);
          }
          else
          {
            alert("Email must contain @");
          }
          
        }
        else
        {
          alert("Fields can not be empty.");
          
        }
      
    }

  
    GetStates(event){
        let stateName = event.target.value;

        let statesList = this.state.data[stateName];

        this.setState({
            cities: statesList
        })  

    }

    render() {

        var states = Object.keys(this.state.data);


        var MyStates = states.map((st)=> <option>{st}</option>)

        var MyCities = this.state.cities.map((st)=> <option>{st}</option>)

        return (
            <div> 
        
          <head>
          <title>
            Employee App
          </title>
          </head>
      
          <h2>Add Customer</h2>

          <Form horizontal>
        <FormGroup controlId="formHorizontalFirstName">
          <Col componentClass={ControlLabel} sm={2}>
            First Name
          </Col>
          <Col sm={5}>
            <FormControl type="text" placeholder="First Name" onChange={e => this.setState({FirstName: e.target.value})}  />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalLastName">
          <Col componentClass={ControlLabel} sm={2}>
            Last Name
          </Col>
          <Col sm={5}>
            <FormControl type="text" placeholder="Last Name" ref="lastText" onChange={e => this.setState({LastName: e.target.value})} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalState" onChange={event => this.GetStates(event)}>
          <Col componentClass={ControlLabel} sm={2}>
            State
          </Col>
          <Col sm={5}>      
          <FormControl componentClass="select" onChange={e => this.setState({State: e.target.value})}>
          <option>Select</option>
        {MyStates}
        </FormControl> 
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalCities" >
        <Col componentClass={ControlLabel} sm={2}>
          City
        </Col>
        <Col sm={5}>      
        <FormControl componentClass="select" onChange={e => this.setState({City: e.target.value})}> 
        <option>Select</option>     
          {MyCities}
        </FormControl> 
        </Col>
      </FormGroup>    
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
         Email
        </Col>
        <Col sm={5}>
          <FormControl type="text" placeholder="name@email.com" ref="emailText" onChange={e => this.setState({Email: e.target.value})} />
        </Col>
      </FormGroup>

       <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="button" onClick={this.buttonClicked.bind(this)}>
            Add User
          </Button>
        </Col>
      </FormGroup>
      </Form>    
      </div> 
        );
    }
}
