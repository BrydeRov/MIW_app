import React from 'react'

const DatosIdentificaciones = ({ isActive, children }) => {
    return (
        <div className={`multisteps-form__panel cuatro ${isActive && 'js-active'}`} data-animation="slideHorz" id="">
            <div className="wizard-forms pb-0">
                <div className="inner clearfix">
                    <div className="wizard-photo-area">
                        <div className="wizard-photo-upload position-relative">                                    
                            <div className="display-img text-center">
                                <img id="profile-image" src="img/foto.jpg" alt="Foto"/>
                            </div>
                        </div>
                        <div className="photo-upload-text">Se recomienda que las fotografías sean lo más parecido al ejemplo.</div>
                    </div>
                    {children}
                    <div className="wizard-v3-progress">
                        <span>Paso 4 de 5</span>
                        <h3>75% Completado</h3>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '75%' }}>
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

export default DatosIdentificaciones
