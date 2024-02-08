import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import home from '../images/home.png'
import Imc from './bmi'
import './main.css'
import Newsletter from './Newsletter'
import Plans from './Plans'


const Home = ({ isAutheticated }) => {
    if (isAutheticated) {
        return <Redirect to='/dashboard' />
    }
    return (
        <>
            <Navbar />
            <section className='home'>
                <div className='container'>
                    <div className='row align-items-center min-vh-100'>
                        <div className='col-md-6'>
                            <img src={home} className='w-100 mt-5 pt-5' alt='Home GymNew' />
                        </div>
                        <div className='col-md-6 text-center text-md-left mb-4'>
                            <span className='home__subtitle'>Return to the Gym</span>
                            <h3 className='home__title pt-2'>TRAIN-REST-REPEAT</h3>
                            <Link to='/login'>
                                <Button title='START NOW' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Imc />
            <Plans />
            <Newsletter />
            <Footer />
        </>
    )
};

Home.propTypes = {
    isAutheticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAutheticated: state.auth.isAutheticated
});

export default connect(mapStateToProps)(Home);