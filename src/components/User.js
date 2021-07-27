import React, { Component } from 'react';
import UserConsumer from '../Context';
// import PropTypes from 'prop-types';


class User extends Component {
    state = {
        isVisible: true
    }
    onClickEvent = () => {
        console.log("tıklandı...");
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = (dispatch, e) => {
        console.log("delete_user");
        
        dispatch({ type: "DELETE_USER", payload: this.props.id });
    }


    // arrow function olarak tanımlarsak otomatik bind() işlemi yapılmış olur.


    render() {

        // Destructing özelliği normalde this.props.name diye tanımlamıştık 

        return (
            <UserConsumer>
                {

                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card"  style= {this.state.isVisible ?{ backgroundColor:"#85929E", color:"white"} : null}  >
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 onClick={this.onClickEvent} className="d-inline">{this.props.name}</h4>

                                        <i onClick={() => this.onDeleteUser(dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }} ></i>
                                    </div>
                                    {
                                        this.state.isVisible ?
                                            <div className="card-body">
                                                <p className="card-text">Department: {this.props.department}</p>
                                                <p className="card-text">Salary: {this.props.salary}</p>
                                            </div> :
                                            null
                                    }
                                </div>

                            </div>
                        )

                    }
                }
            </UserConsumer>


        )
    }
}
User.defaultProps = {
    department: "Unemployed"
}

// User.propTypes = {
//     name: PropTypes.string.isRequired,
//     department: PropTypes.string.isRequired,
//     skill: PropTypes.string.isRequired
// }

export default User;