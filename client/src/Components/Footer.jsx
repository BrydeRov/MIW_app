import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-desktop bg-white shadow-top">
            <div className="row h-100 align-items-center">
                <div className="col-sm-5 col-md-5 col-lg-6">
                    <p className="pb-2"><a href="tel:5544886736"><img src="img/telefono.svg" alt="" width="20px" className="pr-1"/>554 488 6736</a></p>
                    <p className="pt-2"><a href="https://miw.mx/" target="_blank"><img src="img/sitio_web.svg" alt="" width="20px" className="pr-1"/>miw.mx</a></p>
                </div> 
                <div className="col-sm-7 col-md-7 col-lg-6 text-center">
                    <img src="img/miw-logo.svg" alt="MIW" width="300px"/>
                </div>                                   
            </div>
        </footer>   
    )
}

export default Footer
