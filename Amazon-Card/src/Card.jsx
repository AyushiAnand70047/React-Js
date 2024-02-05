import './Card.css';

function Card({productName,prodFeature1,prodFeature2, price, discount}){
    return(
        <>
        <div className="Card">
            <h3>{productName}</h3>
            <img src="./img.jpeg" alt="product image"></img>
            <ul>
                <li><p>{prodFeature1}</p></li>
                <li><p>{prodFeature2}</p></li>
            </ul>
            <h4 className="cardPrice">&#8377;<strike>{price}</strike> &#8377;{discount}</h4>
        </div>
        </>
    )
}

export default Card;