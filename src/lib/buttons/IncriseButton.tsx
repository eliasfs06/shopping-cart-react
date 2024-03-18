import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IncriseButton({ quantity,increaseQuantity, decreaseQuantity }: { quantity : number, increaseQuantity: () => void, decreaseQuantity: () => void }) {
    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-1">{ quantity }</div>
            <div className="col-1">
                <button onClick={ increaseQuantity }><FontAwesomeIcon icon="chevron-up"/></button>
                <button onClick={ decreaseQuantity }><FontAwesomeIcon icon="chevron-down"/></button>
            </div>
        </div>
    );
}

export default IncriseButton;