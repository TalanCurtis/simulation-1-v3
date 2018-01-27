import React, {Component} from 'react';
import './Header.css'
import Logo from '../../images/logo.png'
import {Link} from 'react-router-dom'

export default class Header extends Component{

    render(){
        return(
            <div className="Header">
                <Link to="/"><img className="Logo" src={Logo} alt=""/></Link>
                <h1>{this.props.headerProps.pageTitle}</h1>
                <h1>{this.props.headerProps.binTitle}</h1>
            </div>
        )
    }

}