import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import services1 from '../images/services-1.jpg';
import services2 from '../images/services-2.jpg';
import services3 from '../images/services-3.jpg';
import './main.css';

const Services = () => {
    return (
        <>
            <Navbar />
            <section className='container services my-5'>
                <h2 className='display-5 title text-center py-4'>SERVICES WE PROVIDE</h2>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className='col'>
                        <div className='card border-0'>
                            <div className='overflow-hidden'>
                                <img src={services1} className='card-img-top' alt='Card Services' />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title title'>SMART TRAINING</h5>
                                <p className='card-text'>we at dca gyms personalise your routine</p>
                                <Button title='More information' />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border-0'>
                            <div className='overflow-hidden'>
                                <img src={services2} className='card-img-top' alt='Card Services' />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title title'>DUMBELL AREA</h5>
                                <p className='card-text'>Spacious place to store dumbbells</p>
                                <Button title='More information'/>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border-0'>
                            <div className='overflow-hidden'>
                                <img src={services3} className='card-img-top3' alt='Card Services' />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title title'>CARDIO AREA</h5>
                                <p className='card-text'>Space for special cradio exrecises</p>
                                <Button title='More information' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Services