import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './styles.css';

const CustomerForm = ({ newOrder }) => {
  var randomstring = require('randomstring');

  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const orderID = randomstring.generate({
      length: 10,
      charset: 'alphabetic',
      capitalization: 'uppercase',
    });
    newOrder(data, orderID);
    history.push('/gracias', orderID);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-custom">
      <div className="card-details">
        <h3 className="title">Datos del pedido</h3>
        <div className="row">
          <div className="form-group col-sm-12">
            <label>Nombre y Apellido del comprador:</label>
            <input
              className="form-control form-group col-sm-12"
              placeholder="Nombre y apellido"
              {...register('name', {
                required: '* El nombre y apellido no puede estar en blanco',
                maxLength: { value: 40, message: 'Nombre muy largo (máx 40 carácteres)' },
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: 'Solo se permiten letras en el nombre',
                },
              })}
            />
          </div>
          {errors.name && <p className="error">{errors.name.message}</p>}
          <div className="form-group col-sm-5">
            <label>Dirección de envio</label>
            <input
              className="form-control form-group"
              placeholder="Calle"
              {...register('name_address', {
                required: '* El nombre de la calle no puede estar en blanco',
                maxLength: {
                  value: 40,
                  message: 'Nombre de la calle muy largo (máx 40 carácteres)',
                },
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: 'Solo se permiten letras en el nombre de la calle',
                },
              })}
            />
          </div>
          <div className="form-group col-sm-3">
            <label>Número:</label>
            <input
              className="form-control form-group"
              placeholder="Número"
              {...register('number_address', {
                required: '* El numero de la calle no puede estar en blanco (indique 0 si es S/N)',
                maxLength: { value: 5, message: 'Número muy largo (máx 5 carácteres)' },
                pattern: {
                  value: /^[0-9\b]+$/,
                  message: 'Solo se permiten números para la dirección',
                },
              })}
            />
          </div>
          <div className="form-group col-sm-4">
            <label>Piso / Dpto</label>
            <div className="input-group">
              <input
                className="form-control"
                placeholder="Piso"
                {...register('floor_address_p', {
                  maxLength: { value: 3, message: 'Piso muy largo (máx 3 carácteres)' },
                  pattern: {
                    value: /^[0-9\b]+$/,
                    message: 'Solo se permiten números para indicar el piso',
                  },
                })}
              />
              <span className="date-separator">/</span>
              <input
                className="form-control"
                placeholder="Dpto"
                {...register('floor_address_d', {
                  maxLength: { value: 3, message: 'Dpto muy largo (máx 3 carácteres)' },
                })}
              />
            </div>
          </div>
          {errors.name_address && <p className="error">{errors.name_address.message}</p>}
          {errors.number_address && <p className="error">{errors.number_address.message}</p>}
          {errors.floor_address_p && <p className="error">{errors.floor_address_p.message}</p>}
          {errors.floor_address_d && <p className="error">{errors.floor_address_d.message}</p>}
          <div className="form-group col-sm-12">
            <label>Email de contacto</label>
            <input
              type="email"
              className="form-control form-group"
              placeholder="ejemplo@gmail.com"
              {...register('email', {
                required: '* El email no puede estar en blanco',
                maxLength: { value: 50, message: 'Email muy largo (máx 50 carácteres)' },
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
                  message: 'Formato de email incorrecto',
                },
              })}
            />
          </div>
          {errors.email && <p className="error">{errors.email.message}</p>}
          <div className="form-group col-sm-12">
            <label>Ingrese mail nuevamente</label>
            <input
              type="email"
              className="form-control form-group"
              placeholder="ejemplo@gmail.com"
              {...register('email2', {
                required: '* El email no puede estar en blanco',
                maxLength: { value: 50, message: 'Email muy largo (máx 50 carácteres)' },
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
                  message: 'Formato de email incorrecto',
                },
                validate: {
                  emailEqual: (value) =>
                    value === getValues().email || 'No coinciden los emails ingresados.',
                },
              })}
            />
          </div>
          {errors.email2 && <p className="error">{errors.email2.message}</p>}
          <div>
            <label>Teléfono de contacto</label>
            <div className="input-group">
              <input
                className="form-control form-group"
                placeholder="011"
                {...register('phone_address_c', {
                  required: '* La característica no puede estar en blanco',
                  maxLength: { value: 6, message: 'Característica muy larga (máx 6 carácteres)' },
                  pattern: {
                    value: /^[0-9\b]+$/,
                    message: 'Solo se permiten números en la característica',
                  },
                })}
              />
              <span className="date-separator">-</span>
              <input
                className="form-control form-group"
                placeholder="4900310"
                {...register('phone_address_n', {
                  required: '* El número no puede estar en blanco',
                  maxLength: {
                    value: 12,
                    message: 'Num. de contacto muy largo (máx 12 carácteres)',
                  },
                  pattern: {
                    value: /^[0-9\b]+$/,
                    message: 'Solo se permiten números para el contacto',
                  },
                })}
              />
            </div>
          </div>
          {errors.phone_address_c && <p className="error">{errors.phone_address_c.message}</p>}
          {errors.phone_address_n && <p className="error">{errors.phone_address_n.message}</p>}
          <div className="form-group col-sm-12">
            <button className="btn btn-primary btn-block btn-custom" type="submit">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CustomerForm;
