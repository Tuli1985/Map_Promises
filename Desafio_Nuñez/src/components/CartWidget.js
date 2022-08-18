import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
    return(
    <div>
        <div className="dot">
            <FontAwesomeIcon icon={faShoppingCart} />
        </div> Farmacia Nuñez
    </div>)
};

export default CartWidget;