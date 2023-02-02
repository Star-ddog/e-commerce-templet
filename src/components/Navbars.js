import { Badge } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { ShoppingCartOutlined } from '@mui/icons-material';

import React from 'react'

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
              <h1 className="logo">Xtar-JS</h1>
            </div>

            <div className="right">
              <div className="menuItems">REGISTER</div>
              <div className="menuItems">LOGIN</div>
              <div className="menuItems">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbars