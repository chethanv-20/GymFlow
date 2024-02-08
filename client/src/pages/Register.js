import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import './main.css';


const Register = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        password2: ''
    });

    const { name, lastname, email, phone, password, password2 } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Password do not match', 'danger');
        } else {
            register({ name, lastname, email, phone, password });
        }
    };

    if (isAuthenticated) {
        return <Redirect to='/profile' />;
    }


    return (
        <section className='container-fluid register py-4'>
            <div className='container shadow p-5 register__form'>
                <div className='text-center'>
                    <Link to='/' className='register__logo'>
                        DCA gyms
                    </Link>
                </div>
                <h2 className='fs-4 title my-4 text-center'>REGISTER </h2>
                <form className='row g-5' onSubmit={e => onSubmit(e)}>
                    <div className='col-md-6'>
                        <label className='form-label fs-5'>NAME</label>
                        <input
                            type='text'
                            className='form-control'
                            name='name'
                            value={name}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label fs-5'>Second name</label>
                        <input
                            type='text'
                            className='form-control'
                            name='lastname'
                            value={lastname}
                            onChange={e => onChange(e)}
                            required />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label fs-5'>Email</label>
                        <input
                            type='email'
                            className='form-control'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label fs-5'>Phone number</label>
                        <input
                            type='tel'
                            className='form-control'
                            name='phone'
                            value={phone}
                            onChange={e => onChange(e)}
                            required />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label fs-5'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minlenght='6'
                            required
                        />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label fs-5'>Confirm Password</label>
                        <input
                            type='password'
                            className='form-control'
                            name='password2'
                            value={password2}
                            onChange={e => onChange(e)}
                            minlenght='6'
                            required
                        />
                    </div>
                    <div className='d-grid gap-2 col-4 mx-auto'>
                        <button type='submit' className='btn btn-primary'>REGISTER</button>
                    </div>
                </form>
            </div>
        </section>
    )
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { setAlert, register }
)(Register)