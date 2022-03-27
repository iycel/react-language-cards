import './Item.css';
import { useState } from 'react';

const Item = ({ card }) => {
    const [show, setShow] = useState(true)

    const showLogo = () => {
        setShow(!show);
        setTimeout(() => {
            setShow(true)
        }, 5000)
    };

    return (
        <div className='card' onClick={showLogo}>
            {show ?
                <div>
                    <img className='card-logo' src={card.img} alt='logo' />
                    <h3 className='card-title'>{card.name}</h3>
                    {/* {console.log(card)} */}
                </div>
                :
                <ul className="list">
                    {
                        card.options.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            }
        </div>
    )
};

export default Item;
