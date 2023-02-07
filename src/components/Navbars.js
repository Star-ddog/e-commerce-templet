import { Badge } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { ShoppingCartOutlined } from '@mui/icons-material';

import React from 'react'
import { Link } from 'react-router-dom';

import './Nav.css';



const Navbars = () => {



  return (

    <div className='container'>

        <div className="wrapper">
            <div className="left">
                <span className="language">EN</span>
                <div className="searchContainer">
                    <input />
                   <Search style={{color:"gray", fontSize:16  }} />
                    
                </div>
            </div>

            <div className="center">
              <Link to={'/'} style={{textDecoration: "none", color: " black"}}><h1 className="logo">Xtar-JS</h1></Link>
            </div>

            <div className="right">
              <Link to={'/register'} className="menuItems" style={{textDecoration: "none", color: " black"}}>REGISTER</Link>
              <Link to={'/login'}  className="menuItems" style={{textDecoration: "none",  color: " black"}}>LOGIN</Link>
              <div className="menuItems">
              <Link to={'/cart'} style={{textDecoration: "none", color: " black"}}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
              </Link>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbars