import React, { useState } from  'react';
        
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordConfirm, setPasswordConfirm] = useState("");  
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");  
    const [passwordConfirmError, setPasswordConfirmError] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passwordConfirm };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    };

    const validateInput = (e) => {
        if (e.target.name === "firstName") {
            setFirstName(e.target.value);
            if (e.target.value.length < 2) {
                setFirstNameError("First Name should be at least 2 characters in length");
            } else setFirstNameError('');
        }
        if (e.target.name === "lastName") {
            setLastName(e.target.value);
            if (e.target.value.length < 2) {
                setLastNameError("Last Name should be at least 2 characters in length");
            } else setLastNameError('');
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
            if (e.target.value.length < 5) {
                setEmailError("Email should be at least 5 characters in length");
            } else setEmailError('');
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
            if (e.target.value.length < 8) {
                setPasswordError("Password should be at least 8 characters in length");
            } else setPasswordError('');
        }
        if (e.target.name === "passwordConfirm") {
            setPasswordConfirm(e.target.value);
            if (e.target.value !== password ) {
                setPasswordConfirmError("Passwords must match");
            } else setPasswordConfirmError('');
        }
    }
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div className="inputDiv">
                    <label>First Name: </label> 
                    <input type="text" onChange={ validateInput } value={ firstName } name="firstName"/>
                </div>
                    {
                        firstNameError ? <p className="error">{ firstNameError } </p> : ''
                    }
                <div className="inputDiv">
                    <label>Last Name: </label> 
                    <input type="text" onChange={ validateInput } value={ lastName } name="lastName"/>
                </div>
                    {
                        lastNameError ? <p className="error">{ lastNameError } </p> : ''
                    }
                <div className="inputDiv">
                    <label>Email: </label> 
                    <input type="email" onChange={ validateInput } value={ email } name="email"/>
                </div>
                    {
                        emailError ? <p className="error">{ emailError } </p> : ''
                    }
                <div className="inputDiv">
                    <label>Password: </label>
                    <input type="password" onChange={ validateInput } value={ password } name="password"/>
                </div>
                    {
                        passwordError ? <p className="error">{ passwordError } </p> : ''
                    }
                <div className="inputDiv">
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ validateInput } value={ passwordConfirm } name="passwordConfirm"/>
                </div>
                    {
                        passwordConfirmError ? <p className="error">{ passwordConfirmError } </p> : ''
                    }
            </form>
        </div>  
    );
};
    
export default UserForm;