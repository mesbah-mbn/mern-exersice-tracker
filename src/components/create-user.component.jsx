import axios from "axios";
import React, { Component } from "react";

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);

        this.onchangeUsername = this.onchangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
        }

    }
    onchangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
        }
        console.log(user);
        
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Create New User</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Username: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onchangeUsername} />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                         value="Create User"
                         className="btn btn-primary"/>
                    </div>
                </form>
            </div> 
        )
    }
}