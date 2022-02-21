import React, {Component} from 'react';
import {FormInput} from "../form-input/form-input.component";
import '../../../assets/styles/sign-in.styles.scss'
import {CustomButton} from "../../custom-button/custom-button.component";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className={'sign-in'}>
                <h2 className={'title'}>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} value={this.state.email} label={'Email'} name={'email'} id={'email'}  required/>
                    <FormInput handleChange={this.handleChange} value={this.state.password} label={'Password'} name={'password'} id={'password'}  required/>
                    <CustomButton  type={"submit"}>
                        Sign In
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;