import React from "react";
import '../../assets/css/lottery.scss';
import {Link, NavLink} from 'react-router-dom';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import Login from './login';
import Logout from './logout';
const clientId = "608991345524-glasiqpeoi0p1p9mkleu8voe32gs1fch.apps.googleusercontent.com";
function Header() {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client:auth2', start)
    })
    const [items, setItems] = React.useState(() => 
		window.localStorage.getItem("google_acc") ?? []
	);


    // state = {

    // }
    // handleChangeFirstName = (event) => {
    //     this.setState({ firstName: event.target.value });
    // }
    return (
        <>
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top topnav">
                    <div className="container">

                        <img src={require('../../assets/images/logo.png')} width="50" height="50" className="img-responsive" alt="Image" />

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/buyticket">Buyticket</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/admin">Admin</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                                <Login />
                                <Logout />
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
};
export default Header;