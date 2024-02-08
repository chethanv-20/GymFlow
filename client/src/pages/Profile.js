import PropTypes from 'prop-types';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../actions/profile';
import Navbar from '../components/Navbar';
import userp from '../images/user.jpg';
import './main.css';

const Profile = ({ getCurrentProfile, auth: { user }, profile: { profile } }) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <Navbar />
      <div className='container-fluid my-5 py-5'>
        <div className='text-center'>
          <h2 className='user title'>Bienvenido {user && user.name}</h2>
          <img src={userp} alt='Profile' className='img-fluid rounded-circle' style={{ width: '40%' }} />
          {profile !== null ? (
            <Fragment>
              <div className='my-4 text-white'>
                <h3>Información personal:</h3>
                <span>Nombre: {user && user.name}</span><br />
                <span>Apellido: {user && user.lastname}</span><br />
                <span>Correo: {user && user.email}</span><br />
                <span>Teléfono: {user && user.phone}</span><br />
                <span>Altura: {user && profile.height} cm</span><br />
                <span>Peso: {user && profile.weight} kg</span><br />
                <span>Edad: {user && profile.age} años</span>
                <div className='mt-1 mb-2 p-1 pb-2'>
                  <Link to='/create-profile' className='btn btn-primary my-1'>
                    Datos personales
                  </Link>
                  {/* <br/><button className='btn btn-danger delete-btn mt-2'>Delete Account <FaTrashAlt className='ps-2 fs-4' /></button> */}
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className='mt-1 mb-2 p-1 pb-2'>
                <p>Aún no ha configurado un perfil, agregue información.</p>
                <Link to='/create-profile' className='btn btn-primary my-1'>
                  Crear Perfil
                </Link>
              </div>
            </Fragment>
          )}
        </div>
        <div className='mt-4'>
          <h3 className='text-white text-center'>Tus medidas:</h3>
          <div className='d-flex justify-content-center align-items-center'>
            <table className='table table-hover profile__table text-center'>
              <thead className='dashboard__table'>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Musculo</th>
                  <th scope='col'>Medida(cm)</th>
                </tr>
              </thead>
              <tbody className='table-light'>
                <tr>
                  <th scope='row'>1</th>
                  <td>Cintura</td>
                  <td>{user && profile.waistdiameter}</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Pecho</td>
                  <td>{user && profile.chestdiameter}</td>

                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>Hombro</td>
                  <td>{user && profile.shoulderdiameter}</td>

                </tr>
                <tr>
                  <th scope='row'>4</th>
                  <td>Pierna</td>
                  <td>{user && profile.legsdiameter}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment >
  )
};



Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
