import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",alignItems:"center",height:"70px"}}>
        <Link to=""><img src='https://cdn.shopify.com/s/files/1/0183/5769/files/proper_logo_website_header_85x.png?v=1618292350'/></Link>
        <Link to="/products">Products</Link>
        <Link to="/aboutus">AboutUs</Link>
        <Link to="/contactus">Contactus</Link>
        <Link to="/faq">FaQ</Link>
        </div>
    </div>
  )
}

export default Navbar