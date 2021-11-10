import React from 'react';

const Error = () => {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="row h-100 align-items-center py-5">
          <div className="col-lg-6">
            <h1 className="display-4" style={{ color: 'red' }}>
              Ooops .. !
            </h1>
            <h3>No se encontró la página :(</h3>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img src="https://i.imgur.com/qIufhof.png" alt="404" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
