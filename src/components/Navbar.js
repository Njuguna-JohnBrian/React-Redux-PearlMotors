import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><input placeholder="Search Car By Model" style={{border:'1px solid black', borderRadius:10}}/></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons"></i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;