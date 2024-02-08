import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import './main.css';

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to='/profile' />
    }

    return (
        <section>
            <div className='container w-75 my-5 shadow'>
                <div className='row align-items-stretch'>
                    <div className='col bg-white'>
                        <div className='text-center pt-3'>
                            <Link to='/' className='login__logo'>
                                DCA gyms
                            </Link>
                        </div>
                        <h2 className='fs-4 title text-center py-4'>SIGN IN </h2>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className='mb-3 py-4'>
                                <label className='form-label fs-5 contact-label'>MAIL </label>
                                <input
                                    type='email'
                                    placeholder='enter your emial'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    name='email'
                                    value={email}
                                    onChange={e => onChange(e)}
                                    required
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label fs-5 contact-label'>password</label>
                                <input
                                    type='password'
                                    placeholder='enter your password'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                    name='password'
                                    value={password}
                                    onChange={e => onChange(e)}
                                    required
                                />
                            </div>
                            <div className='text-end py-2'>
                                <a href='/' className='fs-6 login__forget'>forgot password??</a>
                            </div>
                            <div className='text-center d-grid gap-2 col-6 mx-auto py-3'>
                                <button type='submit' className='btn login__btn btn-primary'>SIGN IN </button>
                            </div>
                        </form>
                        <div className='text-center d-grid gap-2 col-6 mx-auto py-4'>
                            <Link to='/register' className='fs-6 login__register'>
                                Create your account<FaArrowRight className='ps-2 fs-4' />
                            </Link>
                        </div>
                    </div>
                    <div className='col login__bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 login'>
                    </div>
                </div>
            </div>
        </section>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);