import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import {
    AUTH_ERROR, CLEAR_PROFILE, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED
} from './types';

//load user
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

//REGISTER USER
export const register = ({ name, lastname, email, phone, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, lastname, email, phone, password });

    try {
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
}

//LOGIN USER
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({ type: LOGOUT });
}