import React from 'react';
import './formstyle.css';
import {withRouter} from 'react-router-dom';

////////////////Validators///////////////

const validNameRegex=RegExp(/^[A-Za-z]+$/);
const validEmailRegex=RegExp(/^[a-zA-Z]{2}[0-9]{2}[A-Za-z][0-9]{3}@smail\.iitm\.ac\.in$/);
const validRollNoRegex=RegExp(/^[A-Za-z]{2}[0-9]{2}[BCDMbcdm][0-9]{3}$/);
const validContactRegex=RegExp(/^[0-9]{10}$/);
const validPasswordRegex=RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/);
const validateForm = (errors) => {
let valid = true;
Object.values(errors).forEach(
  // if we have an error string set valid to false
  (val) => val.length > 0 && (valid = false)
);
return valid;
}
//////////////////////////////////////////

class Form extends React.Component{
  constructor(props){
    super(props);
  this.state={
    fullName: null,
    rollno:null,
    contact:null,
    email: null,
    password: null,
    confirmpassword:null,
    errors: {
      fullName: '',
      rollno:'',
      contact:'',
      email: '',
      password: '',
      confirmpassword:'',
    }
  };}


//////////Handling changes and using validators/////////////
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    console.log(event.target.value)
    switch (name) {
      case 'fullName':
        errors.fullName =
          validNameRegex.test(value) && value.length>4
            ? ''
            : 'Invalid Name or Name is short';
        break;
      case 'rollno':
        errors.rollno =
          validRollNoRegex.test(value)
            ? ''
            : 'Invalid Rollno';
        break;
      case 'contact':
        errors.contact =
          validContactRegex.test(value)
            ? ''
            : 'Invalid number';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          validPasswordRegex.test(value)
            ? ''
            : 'Password must be 8 characters long! And should have atleast one numeric digit and one special characters from {!@#$%^&*}';
          break;
      case 'confirmpassword':
        if(value===this.state.password)
          errors.confirmpassword =''
        else {
          errors.confirmpassword='Not Matching'
        }

        break;
      default:
        break;
    }

    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)

    })
  }
/////////////Submit to move to next page///////////////////////
handleSubmit = (event) => {
  event.preventDefault();
  if(validateForm(this.state.errors)) {
    this.props.history.push('/nextpage');
  }else{
    console.error('Invalid Form')
    alert("INVALID FORM")
  }
}

//////////////Form///////////////////
  render(){
    const {errors}=this.state
    return(
      <div className='wrapper'>
              <div className='form-wrapper'>
                <h2>Welcome!!Register Here :)</h2>

                <form onSubmit={this.handleSubmit.bind(this)} noValidate >

                  <div className='fullName'>
                    <label htmlFor="fullName">Full Name</label><br/>
                    <input type='text' name='fullName' onChange={this.handleChange} noValidate />
                    {errors.fullName.length > 0 &&
                      <span className='error'>{errors.fullName}</span>}
                  </div>

                  <div className='rollno'>
                  <label htmlFor="rollno">Roll No</label><br/>
                  <input type='text' name='rollno' onChange={this.handleChange} noValidate/>
                  {errors.rollno.length > 0 &&
                      <span className='error'>{errors.rollno}</span>}
                  </div>

                  <div className='contact'>
                  <label htmlFor="contact">Contact</label><br/>
                  <input type='text' name='contact' onChange={this.handleChange} noValidate/>
                  {errors.contact.length > 0 &&
                      <span className='error'>{errors.contact}</span>}
                  </div>

                  <div className='email'>
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' onChange={this.handleChange} noValidate />
                    {errors.email.length > 0 &&
                        <span className='error'>{errors.email}</span>}
                  </div>

                  <div className='password'>
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' onChange={this.handleChange} noValidate />
                    {errors.password.length > 0 &&
                        <span className='error'>{errors.password}</span>}
                  </div>

                  <div className='confirmpassword'>
                    <label htmlFor="confirmpassword">Confirm Password</label><br/>
                    <input type='password' name='confirmpassword' onChange={this.handleChange} noValidate />
                    {errors.confirmpassword.length > 0 &&
                        <span className='error'>{errors.confirmpassword}</span>}
                  </div>

                  <div className='submit'>
                    <button>Enter</button>
                  </div>

                </form>
              </div>
            </div>
    )
  }
}
export default withRouter(Form);
