import './main.css';

const Button = ({ title }) => {
    return (
        <button className='btn btn-primary'>
            {title}
        </button>
    )
}

export default Button;