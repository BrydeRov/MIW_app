import React from 'react'

const Instrucciones = ({ children, isActive, nextStep }) => {
    return (
        <div className={`multisteps-form__panel ${isActive && 'js-active'} bg-gray`} data-animation="slideHorz">
            <div className="wizard-forms pb-0">
                <div className="inner clearfix">
                    <div className="wizard-form-field mb-5">
                        <h4 className="color-red">Comencémos con el proceso</h4>
                        <p className="mt-4">Necesitarás los siguiente requisitos para realizar tu solicitud de identificaciones.</p>
                    </div>
                    <div className="wizard-form-field mb-85">                                
                        <div className="row elemt-cards">
                            <div className="col-md-4">
                                <div className="card mb-3 bg-blue pl-4 pr-4 pt-3">
                                    <div className="row g-0 m-0 p-0">
                                        <div className="col-sm-6 col-md-12 d-flex align-items-center justify-content-center p-0">
                                            <img src="img/recibo-de-pago.svg" className="img-fluid rounded-start" alt="..." style={{ height: '60px' }}/>
                                        </div>
                                        <div className="col-sm-6 col-md-12 p-0">
                                            <div className="card-body">
                                            <h5 className="card-title text-white text-center mb-0">Recibo de <sup className="color-red sup-desk">1</sup>  pago <sup className="color-red sup-mobile">1</sup></h5>                                       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-3 bg-blue pl-4 pr-4 pt-3">
                                    <div className="row g-0 m-0 p-0">
                                        <div className="col-sm-6 col-md-12 d-flex align-items-center justify-content-center p-0">
                                            <img src="img/logotipo.svg" className="img-fluid rounded-start" alt="..." style={{ height: '60px' }}/>
                                        </div>
                                        <div className="col-sm-6 col-md-12 p-0">
                                            <div className="card-body">
                                            <h5 className="card-title text-white text-center mb-0">Logotipo <sup className="color-red sup-desk">2</sup> <br/> empresa <sup className="color-red sup-mobile">2</sup></h5>                                       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-3 bg-blue pl-4 pr-4 pt-3">
                                    <div className="row g-0 m-0 p-0">
                                        <div className="col-sm-6 col-md-12 d-flex align-items-center justify-content-center p-0">
                                            <img src="img/fotografias_individuales.svg" className="img-fluid rounded-start" alt="..." style={{ height: "60px" }} />
                                        </div>
                                        <div className="col-sm-6 col-md-12 p-0">
                                            <div className="card-body">
                                            <h5 className="card-title text-white text-center mb-0">Fotografías <sup className="color-red sup-desk">3</sup> <br/> individuales <sup className="color-red sup-mobile">3</sup></h5>                                       
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-2">
                                <p><span className="color-red">1</span> El comprobante de pago puede ser la imagen de transferencia o fotografía del ticket de depósito.</p>
                                <p><span className="color-red">2</span> El archivo debe estar en formato .png, .jpg o PDF, con un peso menor a 2mb.</p>
                                <p><span className="color-red">3</span> Cada fotografía debe tener el nombre de quién es la credencial, el peso no debe ser mayor a 2mb.</p>
                            </div>
                            <div className="col-md-12 mt-5">
                                <div className="wizard-form-field mb-3 m-0">
                                    <h4 className="color-red">Información de pago</h4>
                                    <p className="mt-4">Agrega tu correo electrónico y enviaremos la información de pago.</p>
                                </div>                                       
                            </div>
                            <div className="col-md-12 correo">
                                <div className="wizard-form-input">
                                    {children}                                            
                                </div>
                                <div className="w-100 text-right">
                                    <button type="button" className="btn btn-danger"><img src="img/solicitar-informacion.svg" alt="Información" width="40px" className="pr-2"/> Solicitar información</button>
                                </div>
                            </div>  
                            <div className="col-md-12 mt-5 pt-5">
                                <div className="actions">
                                    <ul className="justify-content-end">
                                        <li>
                                            <button onClick={nextStep} className="js-btn-next siguienteuno" title="Siguiente">
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
                        <span>Paso 1 de 5</span>
                        <h3>0% Completado</h3>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '0%' }}>
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
                        <p className="pb-2">
                            <a href="tel:5544886736">
                                <img src="img/telefono.svg" alt="" width="20px" className="pr-1"/>
                                554 488 6736
                            </a>
                        </p>
                        <p className="pt-2">
                            <a href="https://miw.mx/" target="_blank">
                                <img src="img/sitio_web.svg" alt="" width="20px" className="pr-1"/>
                                miw.mx
                            </a>
                        </p>
                    </div>                                 
                </div>
            </footer>  
        </div>
    )
}

export default Instrucciones
