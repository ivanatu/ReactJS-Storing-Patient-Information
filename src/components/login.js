import React, { Component } from 'react';
import axios from 'axios';
import {notify} from 'react-notify-toast';

class Login extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
              this.state = {
                items:'',
                firstname:'',
                lastname:'',
                sex:'',
                age:'',
                city:'',
                country:'',
                diabetic:''
              };
              
       }

handleSubmit = (event) => {
    event.preventDefault();
    const firstname = event.target.firstname.value
    const lastname = event.target.lastname.value
    const sex = event.target.sex.value
    const city = event.target.city.value
    const age = event.target.age.value
    const country = event.target.country.value
    const diabetic = event.target.diabetic.value

    var items = [...this.state.items]
    items.push({firstname, lastname, sex, age, city, country, diabetic});
            this.setState({
                firstname:"",
                lastname:"",
                sex:"",
                age:"",
                city:"",
                country:"",
                diabetic:"",
                items:items
            })     
}

handleChange = (event) =>{
    const { value,name} = event.target;
    // const items = [...this.state.items];
    this.setState({
       [name]: value,
    })
}

render(){
        
return(
    <div>
    <div className="login">
        <div className="login-screen">
            <div className="app-title">
                <h1>New Medical Record</h1>
            </div>
            
            <div className="login-form">
                <form method="POST" id="login_form" name="login_form" className="register-form" 
                onSubmit={event => this.handleSubmit(event)}>
                <div className="control-group">
                    
                    <input type="text" className="login-field"  placeholder="First name" id="firstname" 
                    name="firstname" value={this.state.firstname} onChange={this.handleChange} required/>
                    <label className="login-field-icon fui-user" htmlFor="login-name"></label>
                </div>
                <div className="control-group">
                    <input type="text" className="login-field"  placeholder="Last name" id="lastname" name="lastname" 
                    value={this.state.lastname} onChange={this.handleChange}required/>
                    <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                </div>
                
                <div className="radio">
                <select id = "sex"  value={this.state.sex} name="sex" 
                         onChange={this.handleChange}required>
                <option><label class="radio-inline"><input type="radio" name="gender" value="male"/> Male</label></option>
                <option><label class="radio-inline"><input type="radio" name="gender" value="female"/> Female</label></option>
                </select>
                </div>

                <div className="control-group">
                Age <input type="number" className="login-field"  placeholder="age" id="age" name="age" 
                    value={this.state.age} onChange={this.handleChange}required/>
                    
                </div>
              
                <div className="dropdown">
                    
                    <p>
                        <select id = "city" value={this.state.city} name="city"
                         onChange={this.handleChange}required>
                        <option value = "">city</option>
                        <option value = "Texas">Texas</option>
                        <option value = "Paris">Paris</option>
                        <option value = "Kampala">Kampala</option>
                        <option value = "Nairobi">Nairobi</option>
                        </select>
                        <label className="login-field-icon fui-lock" htmlFor="login-pass"></label></p>

                </div>

                <div className="dropdown">
                    
                    <p>
                        <select id = "country" value={this.state.country} name="country"
                         onChange={this.handleChange}required>
                        <option value = "">country</option>
                        <option value = "USA">USA</option>
                        <option value = "France">France</option>
                        <option value = "Uganda">Uganda</option>
                        <option value = "Kenya">Kenya</option>
                        </select>
                        <label className="login-field-icon fui-lock" htmlFor="login-pass"></label></p>

                </div>

                <div className="radio">
                Living with Diabetes? 
                <select id = "diabetic" value={this.state.diabetic} name="diabetic"
                         onChange={this.handleChange}required>
                <option value="yes"> Yes</option>
                <option value="no"> No</option>
                <option value="unknown"> unknown</option>
                </select>
                </div>
        
                    <button type='submit' className="btn btn-primary">SAVE</button>
                </form>
          
            </div>
                        
         </div>   
    </div>
    <div className='container'>
        
        <h2>List of medical records</h2>
        <table className="table table-hover table-striped">
        
        <thead>
        <tr>
            <th colSpan="2">First Name</th>
            <th colSpan="2">Last Name</th>
            <th colSpan="2">Sex</th>
            <th colSpan="2">Age</th>
            <th colSpan="2">City</th>
            <th colSpan="2">Country</th>
            <th colSpan="2">Diabetic</th>
        </tr>
        </thead> 

         
        <tbody>
            
           {  
            this.state.items?
            (this.state.items.map((item, id) => {
        return(
            
        <tr key={id}> 
               <td colSpan="2">{item.firstname} </td>
               <td colSpan="2">{item.lastname}</td>
               <td colSpan="2">{item.sex}</td>
               <td colSpan="2">{item.age}</td>
               <td colSpan="2">{item.city}</td>
               <td colSpan="2">{item.country}</td>
               <td colSpan="2">{item.diabetic}</td>
        </tr>
        );
        }))
        : null
        }
        
        </tbody> 
        </table>
        </div>
    </div>
    );
    }
}

export default Login;