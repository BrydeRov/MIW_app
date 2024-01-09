import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"
import Header from './Components/Header';
import Instrucciones from './Components/Instrucciones';
import InfoPago from './Components/InfoPago';
import DatosEmpresa from './Components/DatosEmpresa';
import DatosIdentificaciones from './Components/DatosIdentificaciones';
import Footer from './Components/Footer';


function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [wizardStep, setWizardStep] = useState(0);
    // Steps done
    const [stepsDone, setStepsDone] = useState([0]);

    const nextStep = () => {
        setWizardStep(previousVal => previousVal + 1);
        setStepsDone(previousVal => {
            const otherSteps = [...previousVal];

            otherSteps.push(wizardStep + 1);
            return otherSteps;
        });
    }

    const prevStep = () => {
        setWizardStep(previousVal => previousVal - 1);
        setStepsDone(previousVal => {
            let otherSteps = [...previousVal];

            otherSteps = otherSteps.filter(el => el == wizardStep + 1);
            return otherSteps;
        });
    }

    const wizardItems = [
        { label: 'Instrucciones', imgPath: 'img/instrucciones.svg' },
        { label: 'Información de pago', imgPath: 'img/informacion-pago.svg' },
        { label: 'Datos de la empresa', imgPath: 'img/datos-empresa.svg' },
        { label: 'Datos identificaciones', imgPath: 'img/datos-identificaciones.svg' },
        { label: 'Confirmación', imgPath: 'img/datos-identificaciones.svg' },
    ];

    return (
        <div className="wrapper wizard d-flex clearfix multisteps-form h-100 position-relative" style={{ marginTop: '10px' }}>
            <div className="steps order-2 h-100 w-25" >
                <div className="multisteps-form__progress">
                    {wizardItems.map((el, index) => (
                        <span 
                            key={index} 
                            className={
                                `multisteps-form__progress-btn 
                                ${stepsDone?.includes(index) ? 'js-active' : ''}`
                            } 
                            title={el?.label}
                        >
                            <img src={el?.imgPath} width="50px"/>
                            <span>{el?.label}</span>
                        </span>
                    ))}
                </div>  
                <Footer/>
            </div>
            <div className="multisteps-form__form w-75 order-1 position-relative h-100" action="#" id="wizard"> 
                <Header />
                <div className="form-area position-relative">
                    {/* Instrucciones */}
                    <Instrucciones nextStep={nextStep} isActive={wizardStep == 0 ? true : false}>
                        <div className="w-100">
                            <label htmlFor="input-email" className="form-label mb-2 text-left w-100">Correo Electrónico</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control w-100" 
                                id="input-email"
                                {...register("email")}
                            />
                        </div>
                    </Instrucciones>
                    {/*Informacion de pago */}
                    <InfoPago nextStep={nextStep} prevStep={prevStep} isActive={wizardStep == 1 ? true : false}>
                        <div className="row" style={{ display: 'none' }} id="info-factura">
                            <div className="col-md-12">
                                <h4 className="color-red mb-3">Información de Facturación</h4>
                            </div>
                            <div className="col-md-6">
                                <div className="wizard-form-input">                                            
                                    <div className="w-100">
                                        <label htmlFor="input-rfc" className="form-label mb-2 text-left w-100">RFC</label>
                                        <input type="text" id="txtRfc" className="form-control w-100" id="input-rfc"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wizard-form-input">                                            
                                    <div className="w-100">
                                        <label htmlFor="input-nombre-empresa" className="form-label mb-2 text-left w-100">Nombre de la empresa (s)</label>
                                        <input type="text" id="txtNombreEmpresaFactura" name="text" className="form-control w-100" id="input-nombre-empresa"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wizard-form-input">                                            
                                    <div className="w-100">
                                        <label htmlFor="input-direccion" className="form-label mb-2 text-left w-100">Dirección</label>
                                        <input type="text" id="txtDireccion" name="text" className="form-control w-100" id="input-direccion"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wizard-form-input">                                            
                                    <div className="w-100">
                                        <label htmlFor="input-colonia" className="form-label mb-2 text-left w-100">Colonia</label>
                                        <input type="text" id="txtColonia" name="text" className="form-control w-100" id="input-colonia"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wizard-form-input">                                            
                                    <div className="w-100">
                                        <label htmlFor="input-codigo-postal" className="form-label mb-2 text-left w-100">Código Postal</label>
                                        <input type="number" id="noCp" name="codigo" min="1" max="6" step="1" className="form-control w-100" id="input-codigo-postal"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wizard-form-input">                                            
                                    <div className="w-100">
                                        <label htmlFor="select-cfdi" className="form-label mb-2 text-left w-100">Uso de CFDI</label>                                                
                                        <select id="selectCfdi">
                                            <option></option>
                                            <option>G01 - Adquisición de mercancías</option>
                                            <option>G02 - Devoluciones, descuentos o bonificaciones</option>
                                            <option>G03 - Gastos en general</option>
                                            <option>I04 - Equipo de cómputo y accesorios</option>
                                            <option>P01 - Por definir</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </InfoPago>
                    {/* Datos Empresa */}
                    <DatosEmpresa isActive={wizardStep == 2 ? true : false}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="wizard-form-input">                                            
                                    <div className="w-100">
                                        <label htmlFor="input-empresa" className="form-label mb-2 text-left w-100">Nombre de la empresa</label>
                                        <input type="text" defaultValue="MADE IN WEB" id="txtNombreEmpresa" className="form-control w-100" id="input-empresa"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wizard-form-input">                                            
                                    <div className="w-100">
                                        <label htmlFor="input-num-oficina" className="form-label mb-2 text-left w-100">No. Oficina</label>
                                        <input type="number" defaultValue="360" id="noOficina" min="1" max="1000" step="1" className="form-control w-100" id="input-num-oficina"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wizard-form-input">                                            
                                    <div className="w-100">
                                        <label htmlFor="input-num-credenciales" className="form-label mb-2 text-left w-100">No. de credenciales</label>
                                        <input type="number" defaultValue="10" id="noCredenciales" min="1" max="1000" step="1" className="form-control w-100" id="input-num-credenciales"/>
                                    </div>
                                </div>
                            </div>    
                            <div className="col-md-12">
                                <p>* El logotipo no es obligatorio, si no es agregado la credencial no incluirá el logotipo de la empresa.</p>
                            </div>
                            <div className="col-md-12 logo">
                                <div className="wizard-form-input wizard-document-upload mt-5">   
                                    <label className="mt-0">Logotipo de la Empresa</label>                                          
                                    <div className="custom-file">
                                        <label htmlFor="file-upload" id="labelLogo" className="custom-file-label w-100 mt-0">.PNG, PDF o .SVG no mayor a 5mb.</label>
                                        <input type="file" className="custom-file-input w-100" id="fileLogotipoEmpresa" name="file-name" capture="document"/>      
                                        <p className="mt-2">*El archivo a adjuntar debe de estar preferente en curvas.(Vectorial)</p>                                  
                                    </div>
                                </div>
                            </div>  
                            <div className="col-md-12 mt-5 pt-5">
                                <div className="actions">
                                    <ul>
                                        <li><button className="js-btn-prev" title="Regresar"><i className="fa fa-chevron-left pr-3 js-btn-prev"></i> Regresar </button></li>
                                        <li><button className="js-btn-next" title="Siguiente">Siguiente <i className="fa fa-chevron-right pl-3 js-btn-next"></i></button></li>
                                    </ul>
                                </div>
                            </div>                           
                        </div>
                    </DatosEmpresa>
                    {/* Datos Identificaciones */}
                    <DatosIdentificaciones isActive={wizardStep == 3 ? true : false}>
                        <div className="wizard-form-field mb-85">
                            <div className="row">
                                <div className="col-md-12"><h4 className="color-red">Credencial 2</h4></div>
                                <div className="col-12 col-md-6">
                                    <div className="wizard-form-input">                                            
                                        <div className="w-100">
                                            <label htmlFor="input-persona" className="form-label mb-2 text-left w-100">Nombre y primer apellido</label>
                                            <input type="text" defaultValue="" id="txtNombre" className="form-control w-100" id="input-persona"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="wizard-form-input">                                            
                                        <div className="w-100">
                                            <label htmlFor="input-puesto" className="form-label mb-2 text-left w-100">Puesto <small>(Opcional)</small></label>
                                            <input type="number" defaultValue="" id="puesto" min="1" max="1000" step="1" className="form-control w-100" id="input-puesto"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row wizard-form-input wizard-document-upload m-0">
                                        <label className="col-md-12 mt-0 text-left" style={{ padding: '8px 0px' }}>Fotografía Credendial 1</label>
                                        <div className="col-md-12 custom-file mb-4 p-0">
                                            <label htmlFor="file-upload" className="custom-file-label w-100 mt-0">.JPG o PDF no mayor a 5mb.</label>
                                            <input type="file" className="custom-file-input w-100 credencialinfo" id="fileFotografia" name="file-name" capture="document"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12"><hr/></div>
                            <div className="row">
                                <div className="col-md-12"><h4 className="color-red">Credencial 1</h4></div>
                                <div className="col-12 col-md-6">
                                    <div className="wizard-form-input">                                            
                                        <div className="w-100">
                                            <label htmlFor="input-persona" className="form-label mb-2 text-left w-100">Nombre y primer apellido</label>
                                            <input type="text" defaultValue="" id="txtNombre" className="form-control w-100" id="input-persona"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="wizard-form-input">                                            
                                        <div className="w-100">
                                            <label htmlFor="input-puesto" className="form-label mb-2 text-left w-100">Puesto <small>(Opcional)</small></label>
                                            <input type="number" defaultValue="" id="puesto" min="1" max="1000" step="1" className="form-control w-100" id="input-puesto"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row wizard-form-input wizard-document-upload m-0">
                                        <label className="col-md-12 mt-0 text-left" style={{ padding: '8px 0px' }}>Fotografía Credendial 2</label>
                                        <div className="col-md-12 custom-file mb-4 p-0">
                                            <label htmlFor="file-upload" className="custom-file-label w-100 mt-0">.JPG o PDF no mayor a 5mb.</label>
                                            <input type="file" className="custom-file-input w-100 credencialinfo" id="fileFotografia" name="file-name" capture="document"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12"><hr/></div>
                            <div className="row">
                                <div className="col-md-12"><h4 className="color-red">Credencial 3</h4></div>
                                <div className="col-12 col-md-6">
                                    <div className="wizard-form-input">                                            
                                        <div className="w-100">
                                            <label htmlFor="input-persona" className="form-label mb-2 text-left w-100">Nombre y primer apellido</label>
                                            <input type="text" defaultValue="" id="txtNombre" className="form-control w-100" id="input-persona"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="wizard-form-input">                                            
                                        <div className="w-100">
                                            <label htmlFor="input-puesto" className="form-label mb-2 text-left w-100">Puesto <small>(Opcional)</small></label>
                                            <input type="number" defaultValue="" id="puesto" min="1" max="1000" step="1" className="form-control w-100" id="input-puesto"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row wizard-form-input wizard-document-upload m-0">
                                        <label className="col-md-12 mt-0 text-left" style={{ padding: '8px 0px' }}>Fotografía Credendial 3</label>
                                        <div className="col-md-12 custom-file mb-4 p-0">
                                            <label htmlFor="file-upload" className="custom-file-label w-100 mt-0">.JPG o PDF no mayor a 5mb.</label>
                                            <input type="file" className="custom-file-input w-100 credencialinfo" id="fileFotografia" name="file-name" capture="document"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-5 pt-5">
                                    <div className="actions">
                                        <ul>
                                            <li><button className="js-btn-prev" title="Regresar"><i className="fa fa-chevron-left pr-3 js-btn-prev "></i> Regresar </button></li>
                                            <li><button className="js-btn-next" title="Siguiente">Siguiente <i className="fa fa-chevron-right pl-3 js-btn-next"></i></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DatosIdentificaciones>
                    {/* Confirmacion */}
                    <div className="multisteps-form__panel" data-animation="slideHorz">
                        <div className="wizard-forms pb-0">
                            <div className="inner clearfix">
                                <div className="wizard-form-field mb-5 datos-fin">
                                    <h4 className="color-red">Confirmar pedido</h4>
                                    <p className="mt-4">Se realizará el montaje e impresión de las credenciales de la empresa <strong className="color-blue"><label id="nombreEmpresaLabel"></label></strong>.</p>
                                    <ul className="mt-4" id="aquivanNombreCredenciales"></ul>
                                    <p className="mt-4">El tiempo de impresión es de 7 a 10 días hábiles, haciendo entrega directamente al personal administrativo de Luma Capital.</p>
                                    <p className="mt-4">Gracias.</p>
                                </div>
                                <div className="wizard-form-field mb-85">
                                    <div className="row">
                                        <div className="col-md-12 mt-5 pt-5">
                                            <div className="actions">
                                                <ul>
                                                    <li><button className="js-btn-prev" title="Regresar"><i className="fa fa-chevron-left pr-3 js-btn-prev"></i> Regresar </button></li>
                                                    <li><button className="js-btn-next" id="recargarPagina" title="Siguiente" >Finalizar pedido <i className="fa fa-chevron-right pl-3 js-btn-next"></i></button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wizard-v3-progress">
                                    <span>Paso 5 de 5</span>
                                    <h3>100% Completado</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '100%' }}>
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
                </div>
            </div>
        </div>
    )
}

export default App
