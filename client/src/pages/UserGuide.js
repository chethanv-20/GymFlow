import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import step1 from '../images/step1.png';
import step2 from '../images/step2.png';
import step3 from '../images/step3.png';
import step4 from '../images/step4.png';
import step5 from '../images/step5.png';
import step6 from '../images/step6.png';
import step7 from '../images/step7.png';
import step8 from '../images/step8.png';
import pdf from '../pdf/guiausuario.pdf';
import './main.css';

const UserGuide = () => {
    return (
        <>
            <Navbar />
            <section className='container my-5 py-5'>
                <h2 className='display-5 title text-center'>Guía de Usuario</h2>
                <p className='guide__description pt-1'>En este manual se mostrará el paso a paso, para que los usuarios aprendan a utilizar nuestra página.
                    <br />
                    <br />
                    PASO 1
                    <br />
                    Primero los usuarios deberán registrarse en la página, por lo cual deberán hacer clic en el botón de “iniciar sesión” y posteriormente en el botón de crear tu cuenta.
                </p>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={step1} alt='Step 1' className='img-fluid' />
                </div>
                <p className='guide__description'>
                    PASO 2
                    <br />
                    Ahora los usuarios deberán rellenar el siguiente formulario para que puedan crear su respectiva cuenta.
                </p>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={step2} alt='Step 2' className='img-fluid' />
                </div>
                <p className='guide__description'>
                    PASO 3
                    <br />
                    Después de registrados a los usuarios les aparecerá la pestaña de su perfil, en donde deberán dar clic al botón “Datos del usuario”.
                </p>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={step3} alt='Step 3' className='img-fluid' />
                </div>
                <p className='guide__description'>
                    PASO 4
                    <br />
                    En este paso los usuarios llenarán el formulario de datos del usuario, registrando así sus respectivas medidas las cuales también las podrán actualizar para registrar su proceso.
                </p>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={step4} alt='Step 4' className='img-fluid' />
                </div>
                <p className='guide__description'>
                    PASO 5
                    <br />
                    Al dar clic en el botón “ir al panel de control” al usuario se le dirigirá al listado de ejercicios, en donde estos estarán divididos por día de la semana.
                </p>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={step5} alt='Step 5' className='img-fluid' />
                </div>
                <p className='guide__description'>
                    PASO 6
                    <br />
                    Al deslizar hacia abajo los usuarios podrán ver los gifs de cómo se realizan los distintos ejercicios y que músculo en específico es el que se está trabajando.
                </p>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={step6} alt='Step 6' className='img-fluid' />
                </div>
                <p className='guide__description'>
                    PASO 7
                    <br />
                    Al dar clic en el botón “Productos” los usuarios podrán observar la lista de productos que ofrece la página.
                </p>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={step7} alt='Step 7' className='img-fluid' />
                </div>
                <p className='guide__description'>
                    PASO 8
                    <br />
                    Para finalizar al dar clic en el botón “Cerrar Sesión” los usuarios serán redirigidos a la página principal.
                </p>
                <div className='d-flex justify-content-center align-items-center mb-4'>
                    <img src={step8} alt='Step 8' className='img-fluid' />
                </div>
                <a className='btn btn-primary' href={pdf} download='GuiaDeUsuario.pdf'>
                    Descargar Guia de Usuario
                </a>
            </section>
            <Footer />
        </>
    )
}

export default UserGuide;