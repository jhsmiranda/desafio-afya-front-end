import React from 'react'
import { Navbar, NavbarToggler } from 'reactstrap'

import Logo from '../images/logo16.png'

export default function NavbarGlobal({toggle}) {

    return(
        <Navbar expand="md" className="navbar-global navbar-dark">
            <div className="navbar-brand-global">
                <span>Clínica P</span>
                <img
                    src={Logo} width="16px" height="16px" alt="logo-pormarola"
                    style={{ marginRight: 2, marginBottom: 0 }}
                />
                <span>marola</span>
            </div>
        
            <NavbarToggler onClick={toggle} className="navbar-toggle-global"/>
        </Navbar>
    )
}
