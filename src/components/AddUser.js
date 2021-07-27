import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../Context'

var uniqid = require('uniqid');

const Animation = posed.div({
    viisible: { opacity: 1,
    applyAtStart:{
        display:"block"
    } 
    },
    hidden: { opacity: 0,
    applyAtEnd: {
        display: "none"
    }
    }
});

export default class AddUser extends Component {
    
    state = {
        visible: true,
        name: "",
        salary: "",
        department: ""
        

    }
    

    changeVisibility = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    changeInput = (e) =>{
        console.log({
            [e.target.name]: e.target.value
        });
        this.setState({
            [e.target.name]: e.target.value
        })
       
    } 

    addUser = (dispatch,e) => {
        e.preventDefault();
        const {name,department,salary} = this.state;
        const newUser = {
            id: uniqid(),
            name,
            department,
            salary
          
        }
        dispatch({type: "ADD_USER", payload: newUser})
       
    }
     
        // console.log(newUser);
          //ES6 ile gelen özelliği yukarıda kullandık
            // name:name,
            // department:department,
            // salary: salary

    render() {
        const {visible,name,department,salary} = this.state;

        
        return(
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="d-grid gap-2 mb-2">
                
                                    <button onClick={this.changeVisibility} className="btn btn-dark " type="button">{visible ? "Hide Form" : "Show Form"}</button>
                
                                </div>
                                <Animation pose={visible ? "viisible" : "hidden"}>
                                    <div className="card">
                
                
                                        <div className="card-header">
                                            <h4 >Add User Form</h4>
                                        </div>
                                        <div className="card-body">
                
                                            <form onSubmit={this.addUser.bind(this,dispatch)}>
                
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="id"
                                                        placeholder="Enter Name"
                                                        className="form-control"
                                                        value = {name}
                                                        onChange={this.changeInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="department">department</label>
                                                    <input
                                                        type="text"
                                                        name="department"
                                                        id="id"
                                                        placeholder="Enter department"
                                                        className="form-control"
                                                        value = {department}
                                                        onChange={this.changeInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="salary">salary</label>
                                                    <input
                                                        type="text"
                                                        name="salary"
                                                        id="id"
                                                        placeholder="Enter salary"
                                                        className="form-control"
                                                        value = {salary}
                                                        onChange={this.changeInput}
                                                    />
                                                </div>
                
                                                <div className=" form-group d-grid gap-2 mt-2">
                
                                                    <button  className="btn btn-danger" type="submit">Add User</button>
                
                                                </div>
                
                                            </form>
                
                                        </div>
                
                
                                    </div>
                                </Animation>
                
                
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )

        



       
    }
}
