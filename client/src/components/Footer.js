import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './main.css'

const Footer = () => {
    return (
        <footer className='footer font-small text-white pt-4'>
            <div className='container-fluid text-center text-md-left'>
                <div className='row'>
                    <div className='col-md-6 mt-md-0 mt-3'>
                        <h5 className='fs-6'>©2022 DCA gyms</h5>
                    </div>
                        <h3>TEAM MEMBERS</h3>
                        < h5>CHETHAN V     -  PES2UG21CS143</h5>
                        < h5>DARSHAN GN    -  PES2UG21CS151</h5>
                        < h5>ACHYUTH KUMAR -  PES2UG21CS171</h5>
                    <div className='col-md-3 mb-md-0 mb-3 footer__icons'>
                        <a href='https://www.facebook.com' rel='noreferrer' target='_blank' className='footer__icon'>
                            <FaFacebookSquare />
                        </a>
        
                        <a href='https://www.instagram.com' rel='noreferrer' target='_blank' className='footer__icon'>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer