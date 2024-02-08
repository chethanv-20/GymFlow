import { useCart } from 'react-use-cart';
import './main.css';

const Itemcard = (props) => {

    const { addItem } = useCart();

    return (
        <div className='col'>
            <div className='card my-3 border-0'>
                
                <div className='overflow-hidden products__bg'>
                    <img src={props.img} className='card-img-top products__card-image' alt={props.title} />
                </div>
                <div className='card-body'>
                    <h5 className='card-title title'>{props.title}</h5>
                    <p className='card-text'>Price: ${props.price}</p>
                    <button className='btn btn-primary' onClick={() => addItem(props.item)}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Itemcard;