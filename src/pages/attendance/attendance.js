import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavBarGlobal from "../../components/navbar/navbar";
import SideBarGlobal from "../../components/sidebar/sidebar";
import { PlusCircle } from "react-feather";

import '../../styles/globalstyles.css';

function Attendance() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NavBarGlobal toggle={toggle} />
      <div>
        <SideBarGlobal isOpen={isOpen} />
        <main className="col-md-9 ms-sm-auto col-lg-10">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
            <h1 className="h4">Atendimento</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <Link to="/agendamento">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary mb-2"
                >
                  <PlusCircle
                    size={16}
                    style={{ marginRight: 10, marginBottom: 4 }}
                  />
                  Novo Agendamento
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Attendance;
