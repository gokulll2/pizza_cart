import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png"
import cart from "./assets/cart.png"
export default function Navigation()
{
    const cartStyle={
        background:'#F59E0D',
        display:'flex',
        padding:'6px 6px',
        borderRadius:'50px'
    }
    return(
        <>
        <nav className="container mx-auto flex items-center justify-between py-4">
            
                <Link to="/">
                    <img style={{height:45}} src={logo} alt="logo"/>
                </Link>
                <ul className="flex items-center">
                    <li><Link to="/Home">Home</Link></li>
                    <li className="ml-5"><Link to="/Products">Products</Link></li>
                    <li className="ml-5"><Link to="/Cart">
                        <div style={cartStyle}>
                            <span>
                                 10
                            </span>
                            <img className="ml-2" src={cart} alt="cart"/> 
                        </div>
                        </Link>
                    </li>
                </ul>
        </nav>
        </>
    )
}