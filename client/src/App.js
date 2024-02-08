import { useEffect } from 'react';
//Redux
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { loadUser } from './actions/auth';
import Alert from './components/Alert';
import CreateProfile from './components/profile-forms/CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Services from './pages/Services';
import UserGuide from './pages/UserGuide';
import store from './store';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <div className='App'>
                <Alert />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/services'>
                        <Services />
                    </Route>
                    <Route path='/products'>
                        <CartProvider>
                            <Products />
                        </CartProvider>
                    </Route>
                    <Route path='/userguide'>
                        <UserGuide />
                    </Route>
                    <Route path='/cart'>
                        <CartProvider>
                            <Cart />
                        </CartProvider>
                    </Route>
                    <Route path='/dashboard'>
                        <Dashboard />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/profile'>
                        <Register />
                    </Route>
                    <PrivateRoute exact path='/profile' component={Profile} />
                    <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                </Switch>
            </div>
        </Provider>
    )
}

export default App