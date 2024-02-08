import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import userp from '../images/user.jpg';
import exercises from './exercises.json';
import './main.css';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        <>
            <Navbar />
            <section className='container my-5 py-5'>
                <h2 className='title user d-flex align-items-center'><img src={userp} className='rounded-circle me-2' alt='user' style={{ width: '5%' }} />Bienvenido! {user && user.name}</h2>
                <div className='mt-4'>
                    <h3 className='text-white'>Estas son tus rutinas: </h3>
                    <div>
                        <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
                            <li className='nav-item' role='presentation'>
                                <button className='nav-link active' id='pills-monday-tab' data-bs-toggle='pill' data-bs-target='#pills-monday' type='button' role='tab' aria-controls='pills-monday' aria-selected='true'>Monday</button>
                            </li>
                            <li className='nav-item' role='presentation'>
                                <button className='nav-link' id='pills-tuesday-tab' data-bs-toggle='pill' data-bs-target='#pills-tuesday' type='button' role='tab' aria-controls='pills-tuesday' aria-selected='false'>Tuesday</button>
                            </li>
                            <li className='nav-item' role='presentation'>
                                <button className='nav-link' id='pills-wednesday-tab' data-bs-toggle='pill' data-bs-target='#pills-wednesday' type='button' role='tab' aria-controls='pills-wednesday' aria-selected='false'>Wednesday</button>
                            </li>
                            <li className='nav-item' role='presentation'>
                                <button className='nav-link' id='pills-thursday-tab' data-bs-toggle='pill' data-bs-target='#pills-thursday' type='button' role='tab' aria-controls='pills-thursday' aria-selected='false'>Thursday</button>
                            </li>
                            <li className='nav-item' role='presentation'>
                                <button className='nav-link' id='pills-friday-tab' data-bs-toggle='pill' data-bs-target='#pills-friday' type='button' role='tab' aria-controls='pills-friday' aria-selected='false'>Friday</button>
                            </li>
                        </ul>
                        <div className='tab-content' id='pills-tabContent'>
                            <div className='tab-pane fade show active dashboard__video' id='pills-monday' role='tabpanel' aria-labelledby='pills-monday-tab'>
                                <iframe width='853' height='480' src='https://www.youtube.com/embed/FkSOUITZYkM' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                            </div>
                            <div className='tab-pane fade dashboard__video' id='pills-tuesday' role='tabpanel' aria-labelledby='pills-tuesday-tab'>
                                <iframe width='853' height='480' src='https://www.youtube.com/embed/DewOrmj8ouo' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                            </div>
                            <div className='tab-pane fade dashboard__video' id='pills-wednesday' role='tabpanel' aria-labelledby='pills-wednesday-tab'>
                                <iframe width='853' height='480' src='https://www.youtube.com/embed/tT8td1UQ7gs' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                            </div>
                            <div className='tab-pane fade dashboard__video' id='pills-thursday' role='tabpanel' aria-labelledby='pills-thursday-tab'>
                                <iframe width='853' height='480' src='https://www.youtube.com/embed/hslp24NE7pU' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                            </div>
                            <div className='tab-pane fade dashboard__video' id='pills-friday' role='tabpanel' aria-labelledby='pills-friday-tab'>
                                <iframe width='853' height='480' src='https://www.youtube.com/embed/GbxBQiOxxpo' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='text-white'>Guía de ejercicios: </h3>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                        {
                            exercises.map((exercise) => (
                                <div className='col pt-2' key={exercise.id}>
                                    <div className='card border-0'>
                                        <img
                                            src={exercise.gifUrl}
                                            alt={exercise.target}
                                        />
                                        <div className='card-body text-center'>
                                            <span className='dashboard__exercises'>{exercise.name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);