import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/profile';

const CreateProfile = () => {

  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    waistdiameter: '',
    shoulderdiameter: '',
    chestdiameter: '',
    legsdiameter: ''

  });

  const {
    weight,
    height,
    age,
    waistdiameter,
    shoulderdiameter,
    chestdiameter,
    legsdiameter
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const newUser = {
      weight,
      height,
      age,
      waistdiameter,
      shoulderdiameter,
      chestdiameter,
      legsdiameter
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = JSON.stringify(newUser);
      const res = await axios.post('/api/profile', body, config);
      console.log(res.data);
      toast.success('Datos guardados',
        {
          position: 'top-center',
          duration: 4000,
          style: {
            borderRadius: '20px',
            background: '#f17f5c',
            border: '1px solid #f17f5c',
            padding: '1rem',
            color: '#fff',
          },
        }
      );
    } catch (error) {
      console.error(error.response.data);
    }
  }

  return (
    <section className='container-fluid profile py-4'>
      <div className='container shadow p-5 profile__form'>
        <div className='text-center'>
          <Link to='/' className='profile__logo'>
            DCA gyms
          </Link>
        </div>
        <h2 className='fs-3 text-center my-4'>Datos del usuario</h2>
        <form className='row g-5' onSubmit={e => onSubmit(e)}>
          <div className='col-md-6'>
            <label className='form-label fs-5'>Peso</label>
            <input
              type='text'
              className='form-control'
              name='weight'
              value={weight}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label fs-5'>Altura</label>
            <input
              type='text'
              className='form-control'
              name='height'
              value={height}
              onChange={e => onChange(e)}
              required />
          </div>
          <div className='col-md-6'>
            <label className='form-label fs-5'>Edad</label>
            <input
              type='text'
              className='form-control'
              name='age'
              value={age}
              onChange={e => onChange(e)}
              required />
          </div>
          <div className='col-md-6'>
            <label className='form-label fs-5'>Diámetro de la cintura</label>
            <input
              type='text'
              className='form-control'
              name='waistdiameter'
              value={waistdiameter}
              onChange={e => onChange(e)}
              required />
          </div>
          <div className='col-md-6'>
            <label className='form-label fs-5'>Diámetro del hombro</label>
            <input
              type='text'
              className='form-control'
              name='shoulderdiameter'
              value={shoulderdiameter}
              onChange={e => onChange(e)}
              minlenght='6'
              required
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label fs-5'>Diámetro del pecho</label>
            <input
              type='text'
              className='form-control'
              name='chestdiameter'
              minlenght='6'
              value={chestdiameter}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label fs-5'>Diámetro de las pierna</label>
            <input
              type='text'
              className='form-control'
              name='legsdiameter'
              minlenght='6'
              value={legsdiameter}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label fs-5 contact-label'>¿Por qué quieres entrar al gimnasio?</label>
            <textarea className='form-control' required name='message' rows='3'></textarea>
          </div>
          <div className='text-center'>
            <button type='submit' className='btn btn-primary'>Crear o actualizar datos</button>
            <Toaster />
          </div>
          <div className='text-center'>
            <Link to='/dashboard' className='btn btn-primary'>
              Ir al panel de control
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
