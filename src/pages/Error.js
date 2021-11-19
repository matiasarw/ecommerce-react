import React from 'react';

const Error = () => {
  return (
    <div style={{ backgroundColor: 'white !important' }}>
      <div className="container py-5">
        <div className="row h-100 align-items-center py-5">
          <div className="col-lg-6">
            <h1 className="display-4 h1-red">Ooops .. !</h1>
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
