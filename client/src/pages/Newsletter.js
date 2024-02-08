import Button from '../components/Button';
import './main.css';

const Newsletter = () => {
    return (
        <section className='container pb-5 newsletter'>
            <div className='containaer-fluid rounded py-5 bg-white shadow'>
                <div>
                    <h2 className='text-center title fs-4'>SUBSCRIBE TO RECIEVE OUR PROMOTION AND OFFERS</h2>
                    <form>
                        <div className='d-flex align-items-center justify-content-center'>
                            <input type='email' required className='form-control mt-3 newsletter__input' placeholder='Enter your email' />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mt-4'>
                            <Button title='subscribe' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;