import React, { useState } from 'react'

import NavBarGlobal from '../navbar/navbar'
import SideBarGlobal from '../sidebar/sidebar'

import '../../styles/globalstyles.css'

function Client(props) {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    const atualPage = props.atualPage;
    
    return (
        <div className="body">
            <NavBarGlobal toggle={toggle}/>
            <div className="container-fluid">
                <div className="row">
                    <SideBarGlobal isOpen={isOpen} atualPage={atualPage}/>

                    <main className="col-md-9 ms-sm-auto col-lg-10">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Client;