import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';

const stripePromise = loadStripe('pk_test_51LMDAHErR8adCTToG3L08vQIsE4cUB7lPSPJzceBO1vwE4Q708rt679eCFPyrBumFdgoZRhEb7lp7Kga5k1DL2LW00qBI6oDlN');

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Elements stripe={stripePromise}>
                <App />
            </Elements>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);