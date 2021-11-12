import React, { useState } from 'react';
import { firestore } from '../components/Firebase/Firebase';
import { useForm } from 'react-hook-form';
import Loading from '../components/Loading/Loading';
import OrderItem from '../components/OrderItem/OrderItem';

const Orden = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [item, setItem] = useState({});
  const [state, setState] = useState('first');

  async function handleClick({ order_id }) {
    setState('loading');
    const query = await firestore
      .collection('ordenes')
      .where('order', '==', order_id)
      .limit(1)
      .get();
    if (!query.empty) {
      const data = query.docs[0].data();
      setItem(data);
      setState('successful');
    } else {
      setItem({});
      setState('non-exist');
    }
  }

  return (
    <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ marginTop: '8%', width: '500px', marginBottom: '2%' }}>
        <form onSubmit={handleSubmit(handleClick)} className="form-custom">
          <h4 style={{ marginBottom: '10%', textAlign: 'center' }}>Estado de Orden</h4>
          <input
            style={{ marginBottom: '10%' }}
            className="form-control form-group"
            placeholder="Orden ID"
            {...register('order_id', {
              required: '* Identificador de orden no puede ser nulo.',
              maxLength: { value: 10, message: 'El identificador de orden tiene 10 digitos.' },
              minLength: { value: 10, message: 'El identificador de orden tiene 10 digitos.' },
            })}
          />
          {errors.order_id && <p className="error">{errors.order_id.message}</p>}
          <button
            style={{ marginBottom: '10%' }}
            type="submit"
            className="btn btn-primary btn-block"
          >
            BUSCAR
          </button>
        </form>
        <div>
          {state === 'non-exist' && <h6>Orden inexistente, intente nuevamente.</h6>}
          {state === 'loading' && <Loading />}
          {state === 'successful' && <OrderItem item={item} />}
        </div>
      </div>
    </div>
  );
};

export default Orden;
