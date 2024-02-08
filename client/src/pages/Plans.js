import { FaCheck, FaTimes } from 'react-icons/fa';

const Plans = () => {
    return (
        <section className='container my-5 py-5'>
            <div className='text-center mb-3'>
                <span className='title'>CHOOSE A PLAN</span>
                <h3 className='text-white'>Find a plan for you</h3>
            </div>
            <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
                <div className='col'>
                    <div className='card mb-4 shadow-sm'>
                        <div className='card-header py-3'>
                            <h4 className='my-0 fw-normal'> PLAN SILVER</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title pricing-card-title'>$50<small className='text-muted fw-light'>/month</small></h1>
                            <ul className='list-unstyled mt-3 mb-4'>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Personal trainer</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Classes per week</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Access to gym 24/7</li>
                                <li className='d-flex align-items-center justify-content-center'><FaTimes className='me-1 plans__icon' />Protein powder</li>
                                <li className='d-flex align-items-center justify-content-center'><FaTimes className='me-1 plans__icon' />Personal sessions</li>
                            </ul>
                            <button type='button' className='w-100 btn btn-lg btn-primary'>BUY MEMBERSHIP(in cart)</button>
                            
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-4 shadow-sm'>
                        <div className='card-header py-3'>
                            <h4 className='my-0 fw-normal'>PLAN GOLD</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title pricing-card-title'>$100<small className='text-muted fw-light'>/month</small></h1>
                            <ul className='list-unstyled mt-3 mb-4'>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Personal trainer</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Classes per week</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Access to gym 24/7</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Protein powder</li>
                                <li className='d-flex align-items-center justify-content-center'><FaTimes className='me-1 plans__icon' />Personal sessions</li>
                            </ul>
                            <button type='button' className='w-100 btn btn-lg btn-primary'>BUY MEMBERSHIP(in cart)</button>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-4 shadow-sm'>
                        <div className='card-header py-3'>
                            <h4 className='my-0 fw-normal'>PLAN PLATINUM</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title pricing-card-title'>$150<small className='text-muted fw-light'>/month</small></h1>
                            <ul className='list-unstyled mt-3 mb-4'>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Personal trainer</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Classes per week</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Access to gym 24/7</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Protein powder</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Personal sessions</li>
                            </ul>
                            <button type='button' className='w-100 btn btn-lg btn-primary'>BUY MEMBERSHIP(in cart) </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans;