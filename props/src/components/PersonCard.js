import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }
    render() {
        return (
            <div className="pCard">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <div>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button onClick={ this.birthday }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
                </div>
            </div>
        );
    }

    birthday = () => {
        let currentAge = this.state.age;
        this.setState({ age: currentAge+1 });
    }
}

export default PersonCard;