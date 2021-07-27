import React, {Component} from 'react';

class Statee extends Component {
    onclickEvent() {
        console.log("tıklandı")
    }

    render() {
        return (
            <div>
               {this.onclickEvent}
            </div>
        )
    }
}

export default Statee;


// changeName = (e) =>{
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // changeDepartment = (e) =>{
    //     this.setState({
    //         department: e.target.value
    //     })
    // }
    // changeSalary = (e) =>{
    //     this.setState({
    //         salary: e.target.value
    //     })
    // }
    // // tek bir fonksiyon ile halledeceğiz.