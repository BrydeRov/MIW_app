import React from 'react'

const InfoPago = ({ children, isActive, nextStep, prevStep }) => {
    return (
        <div className={`multisteps-form__panel bg-gray ${isActive && 'js-active'}`} data-animation="slideHorz">
            <div className="wizard-forms pb-0">
                <div className="inner clearfix">
                    <div className="wizard-form-field mb-5">
                        <h4 className="color-red">Comprobante de pago</h4>
                    </div>
                    <div className="wizard-form-field mb-85">
                        <div className="row datos">
                            <div className="col-md-12">
                                <div className="wizard-form-input wizard-document-upload">   
                                    <label className="mt-0">Comprobante de pago</label>                                          
                                    <div className="custom-file">
                                        <label htmlFor="file-upload" id="labelComprobante" className="custom-file-label w-100 mt-0">.JPG o PDF no mayor a 2mb.</label>
                                        <input type="file" className="custom-file-input w-100" id="fileComprobantePago" name="file-name" capture="document"/>                                        
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="col-md-12">
                                <div className="wizard-form-input w-100">
                                    <label>Fecha de pago</label>
                                    <input type="date" id="dateFechaPago" className="w-100" placeholder="Seleccionar la fecha del depósito."/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-check form-switch d-flex align-items-center justify-content-end">
                                    <label className="form-check-label" htmlFor="add_factura" style={{ marginRight: '60px' }}>¿Requieres factura?</label>
                                    <input className="form-check-input switch" type="checkbox" id="add_factura"/>                                            
                                </div>
                            </div>
                        </div>
                        { children }
                        <div className="row mb-85 mt-5 pt-5">
                            <div className="col-md-12">
                                <div className="actions">
                                    <ul>
                                        <li>
                                            <button onClick={prevStep} className="js-btn-prev" title="Regresar">
                                                <i className="fa fa-chevron-left pr-3 js-btn-prev"/> 
                                                Regresar 
                                            </button>
                                        </li>
                                        <li>
                                            <button nextStep={nextStep} className="js-btn-next" title="Siguiente">
                                                Siguiente 
                                                <i className="fa fa-chevron-right pl-3 js-btn-next"/>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>     
                    <div className="wizard-v3-progress">
                        <span>Paso 2 de 5</span>
                        <h3>25% Completado</h3>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: "25%" }}>
                            </div>
                        </div>
                    </div>
                </div>                        
            </div>
            <footer className="footer-mobile bg-white shadow-top">
                <div className="row h-100 align-items-center">                            
                    <div className="col-sm-7 col-md-7 text-center">
                        <img src="img/miw-logo.svg" alt="MIW" width="300px"/>
                    </div>  
                    <div className="col-sm-5 col-md-5">
                        <p className="pb-2"><a href="tel:5544886736"><img src="img/telefono.svg" alt="" width="20px" className="pr-1"/>554 488 6736</a></p>
                        <p className="pt-2"><a href="https://miw.mx/" target="_blank"><img src="img/sitio_web.svg" alt="" width="20px" className="pr-1"/>miw.mx</a></p>
                    </div>                                 
                </div>
            </footer>                    
        </div>
    )
}

export default InfoPago
