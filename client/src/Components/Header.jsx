import React from 'react'

const Header = () => {
    return (
        <div className="pb-3 wizard-title bg-white p-5 shadow sticky-top">
            <div className="row">
                <div className="col-md-3 text-center"><img src="img/identificaciones-logo.svg" alt="" width="150px"/></div>
                <div className="col-md-9 d-flex flex-column justify-content-around">
                    <h3>Formulario de solicitud de Identificaciones en PVC</h3>
                    <p>Proceso de alta de Identificaciones de Luma Capital.</p>
                </div>
            </div>
        </div>
    )
}

export default Header
