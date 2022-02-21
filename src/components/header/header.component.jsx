import React from 'react'
import '../../assets/styles/header.styles.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/image/crown.svg";

export const Header = () => {
    return (
       <header className={'header'}>
           <Link to={'/'}>
               <Logo className="logo"/>
           </Link>
           <div className="options">
               <Link className={'option'} to={'/shop'}>SHOP</Link>
               <Link className={'option'} to={'/shop'}>CONTACT</Link>
               <Link className={'option'} to={'/auth'}>SIGN IN</Link>
           </div>
       </header>
    )
}
