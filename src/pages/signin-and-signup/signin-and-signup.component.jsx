import React from "react";
import '../../assets/styles/sigin-and-signup.styles.scss'
import SignIn from "../../components/auth/sign-in/sign-in.component";

export const SignInAndSignupPage = () => {
    return (
        <div className={'sign-in-and-sign-up'}>
            <SignIn />
        </div>
    )
}