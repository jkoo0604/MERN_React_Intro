import React, { useState } from  'react';
        
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordConfirm, setPasswordConfirm] = useState("");  
    
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
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div className="inputDiv">
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstName } />
                </div>
                <div className="inputDiv">
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ lastName } />
                </div>
                <div className="inputDiv">
                    <label>Email: </label> 
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
                </div>
                <div className="inputDiv">
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
                </div>
                <div className="inputDiv">
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setPasswordConfirm(e.target.value) } value={ passwordConfirm }/>
                </div>
            </form>
            <div className="formData">
                <h4>Your Form Data</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{ firstName }</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{ lastName }</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{ email }</td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>{ password }</td>
                        </tr>
                        <tr>
                            <td>Confirm Password</td>
                            <td>{ passwordConfirm }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>  
    );
};
    
export default UserForm;