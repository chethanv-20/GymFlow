import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Navbar from '../components/Navbar';
import PaymentCard from '../components/PaymentCard';
import './main.css';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return (
        <>
            <Navbar />
            <section className='container my-5 py-5'>
                <h2 className='display-5 title text-center'>MEMBERSHIP CART</h2>
                <h3 className='text-white'> you didnt bought any membership yet</h3>
                <Link to='/products' className='btn btn-primary'>
                    see membership plans
                </Link>
            </section>
        </>
    )

    return (
        <>
            <Navbar />
            <section className='container my-5 py-5'>
                <h2 className='display-5 title text-center'>MEMBERSHIP CART</h2>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <h5 className='text-white pb-2'>cart ({totalUniqueItems}) totalItems ({totalItems})</h5>
                        <div className='table-responsive'>
                            <table className='table table-light table-hover m-0'>
                                <tbody>
                                    {items.map((item, index) => {
                                        return (
                                            <tr className='fs-5' key={index}>
                                                <td>
                                                    <img
                                                        src={item.img}
                                                        alt='Product'
                                                        style={{ height: '6rem' }}
                                                    />
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>quantity ({item.quantity})</td>
                                                <td>
                                                    <button
                                                        className='btn btn-info ms-2 cart-quantity'
                                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                    >-</button>
                                                    <button
                                                        className='btn btn-info ms-2 cart-quantity'
                                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                    >+</button>
                                                    <button
                                                        className='btn btn-danger ms-2 cart-remove'
                                                        onClick={() => removeItem(item.id)}
                                                    >remove membership</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-auto ms-auto'>
                        <h4 className='text-white pt-2'>total price: ${cartTotal}</h4>
                    </div>
                    <div className='col-auto'>
                        <button
                            className='btn btn-danger m-2 cart-clear'
                            onClick={() => emptyCart()}
                        >
                            clean cart
                        </button>
                        {/* A button that opens a modal */}
                        <button
                            className='btn btn-success'
                            data-bs-toggle='modal'
                            data-bs-target='#payment'
                        >
                            buy now
                        </button>
                        <PaymentCard
                            id='payment'
                            pay={`PAY: $ ${cartTotal}`}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;