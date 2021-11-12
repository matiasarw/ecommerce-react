import React from 'react';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'white !important' }}>
      <div className="container py-5">
        <div className="row h-100 align-items-center py-5">
          <div className="col-lg-6">
            <h1 className="display-4">Acerca de</h1>
            <p className="lead text-muted mb-0">
              MWTech es una tienda electrónica diseñada por Matias Ariel Wajnman, Ingeniero en
              Sistemas de Información egresado de la UTN.
            </p>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src="https://mwtech.s3.us-east-2.amazonaws.com/circle%2Bdropped-modified.png"
              alt="about"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
