import React from 'react'

const Gracias = (props) => {
    return (
    <div className="bg-light">
        <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
                <div className="col-lg-6">
                    <h1 className="display-4">Muchas gracias por su compra.</h1>
                    <p className="lead text-muted mb-0">En el transcurso de las 24hs recibirá un mail con los detalles de facturación y envío.</p>
                    <p className="lead text-muted mb-0">Identificador de orden: {props.location.state}</p>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                    <img src="https://mwtech.s3.us-east-2.amazonaws.com/Optimized-MWTECH+-+Foto+Perfil+-+Final-modified+(1).png" alt="success" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
)
}

export default Gracias